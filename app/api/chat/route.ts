import { NextResponse } from "next/server";
import { z } from "zod";
import { LangflowClient } from "@/lib/langflow";

const baseURL = "https://api.langflow.astra.datastax.com";

const messageSchema = z.object({
  message: z.string().min(1),
});

export async function POST(req: Request) {
  const body = await req.json();

  const parsedMessage = messageSchema.safeParse(body);

  if (!parsedMessage.success) {
    return NextResponse.json({ error: "Invalid message" }, { status: 400 });
  }

  const { message } = parsedMessage.data;

  const client = new LangflowClient(
    baseURL,
    process.env.LANGFLOW_APPLICATION_TOKEN ?? ""
  );

  try {
    const tweaks = {};
    const stream = false;
    const response = await client.runFlow({
      flowIdOrName: process.env.LANGFLOW_FLOW_NAME ?? "",
      langflowId: process.env.LANGFLOW_FLOW_ID ?? "",
      inputValue: message,
      inputType: "chat",
      outputType: "chat",
      stream,
      tweaks,
    });

    if (!stream && response && response.outputs) {
      const flowOutputs = response.outputs[0];
      const firstComponentOutputs = flowOutputs.outputs[0];
      const output = firstComponentOutputs.outputs.message.message.text;

      return NextResponse.json({ message: output });
    }
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Failed to process message" },
      { status: 500 }
    );
  }
}