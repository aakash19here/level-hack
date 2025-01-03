type InitiateSessionProps = {
  flowId: string;
  langflowId: string;
  inputValue: string;
  inputType: "chat";
  outputType: "chat";
  stream: boolean;
  tweaks: Record<string, any>;
};

type PostProps = {
  endpoint: string;
  body: Record<string, any>;
  headers?: Record<string, any>;
};

type HandleStreamProps = {
  streamUrl: string;
  onUpdate: (data: any) => void;
  onClose: (message: string) => void;
  onError: (error: any) => void;
};

type RunFlowProps = {
  flowIdOrName: string;
  langflowId: string;
  inputValue: string;
  inputType: "chat";
  outputType: "chat";
  tweaks?: Record<string, any>;
  stream?: boolean;
  onUpdate?: (data: any) => void;
  onClose?: (message: string) => void;
  onError?: (error: any) => void;
};

export class LangflowClient {
  private baseURL: string;
  private applicationToken: string;

  constructor(baseURL: string, applicationToken: string) {
    this.baseURL = baseURL;
    this.applicationToken = applicationToken;
  }

  async post({ ...props }: PostProps) {
    props.headers = props.headers || {};
    props.headers["Authorization"] = `Bearer ${this.applicationToken}`;
    props.headers["Content-Type"] = "application/json";
    const url = `${this.baseURL}${props.endpoint}`;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: props.headers,
        body: JSON.stringify(props.body),
      });

      const responseMessage = await response.json();
      if (!response.ok) {
        throw new Error(
          `${response.status} ${response.statusText} - ${JSON.stringify(
            responseMessage
          )}`
        );
      }
      return responseMessage;
    } catch (error: any) {
      console.error("Request Error:", error.message);
      throw error;
    }
  }

  async initiateSession({
    stream = false,
    tweaks = {},
    ...props
  }: InitiateSessionProps) {
    const endpoint = `/lf/${props.langflowId}/api/v1/run/${props.flowId}?stream=${stream}`;
    return this.post({
      endpoint,
      body: {
        input_value: props.inputValue,
        input_type: props.inputType,
        output_type: props.outputType,
        tweaks,
      },
    });
  }

  handleStream({ ...props }: HandleStreamProps) {
    const eventSource = new EventSource(props.streamUrl);

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      props.onUpdate(data);
    };

    eventSource.onerror = (event) => {
      console.error("Stream Error:", event);
      props.onError(event);
      eventSource.close();
    };

    eventSource.addEventListener("close", () => {
      props.onClose("Stream closed");
      eventSource.close();
    });

    return eventSource;
  }

  async runFlow({ stream = false, tweaks = {}, ...props }: RunFlowProps) {
    try {
      const initResponse = await this.initiateSession({
        flowId: props.flowIdOrName,
        langflowId: props.langflowId,
        inputValue: props.inputValue,
        inputType: props.inputType,
        outputType: props.outputType,
        stream,
        tweaks,
      });

      console.log("Init Response:", initResponse);

      if (
        stream &&
        initResponse &&
        initResponse.outputs &&
        initResponse.outputs[0].outputs[0].artifacts.stream_url
      ) {
        const streamUrl =
          initResponse.outputs[0].outputs[0].artifacts.stream_url;
        console.log(`Streaming from: ${streamUrl}`);
        this.handleStream({
          streamUrl,
          onUpdate: props.onUpdate || (() => {}),
          onClose: props.onClose || (() => {}),
          onError: props.onError || (() => {}),
        });
      }
      return initResponse;
    } catch (e) {
      console.error("Error running flow:", e);
      throw e;
    }
  }
}
