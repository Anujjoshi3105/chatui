import { StreamEvent } from '../services/types';
export interface ToolInvocationCall {
    state: "call";
    toolName: string;
    toolCallId?: string;
    args?: Record<string, unknown>;
}
export interface ToolInvocationResult {
    state: "result";
    toolName: string;
    toolCallId?: string;
    result: unknown;
}
export type ToolInvocation = ToolInvocationCall | ToolInvocationResult;
export interface Message {
    id: string;
    role: "user" | "assistant";
    content: string;
    createdAt?: Date;
    custom_data?: Record<string, unknown>;
    toolInvocations?: ToolInvocation[];
    parts?: unknown[];
}
export interface ChatRuntimeState {
    messages: Message[];
    input: string;
    isGenerating: boolean;
    followUpPrompts: string[];
    currentThreadId: string | undefined;
    currentAssistantMessageId: string | null;
    metadata: import('../services/types').ServiceMetadata | null;
    metadataLoading: boolean;
    error: string | null;
}
export type ChatRuntimeConfig = {
    url: string;
    agent?: string;
    model?: string;
    threadId?: string;
    userId?: string;
    stream?: boolean;
    storageKey?: string;
    starterMessage?: string;
    starterSuggestions?: string[];
    /** Called when stream ends with the final assistant message content (e.g. for TTS). */
    onStreamEnd?: (lastContent: string) => void;
};
export type ChatRuntimeAction = {
    type: "SET_INPUT";
    payload: string;
} | {
    type: "SET_MESSAGES";
    payload: Message[];
} | {
    type: "SET_THREAD_ID";
    payload: string | undefined;
} | {
    type: "SET_METADATA";
    payload: ChatRuntimeState["metadata"];
} | {
    type: "SET_METADATA_LOADING";
    payload: boolean;
} | {
    type: "SET_ERROR";
    payload: string | null;
} | {
    type: "START_SEND";
    payload: {
        userMessage: Message;
        assistantMessage: Message;
    };
} | {
    type: "STREAM_TOKEN";
    payload: {
        messageId: string;
        content: string;
    };
} | {
    type: "STREAM_MESSAGE";
    payload: {
        messageId: string;
        event: StreamEvent;
    };
} | {
    type: "STREAM_UPDATE";
    payload: {
        followUp?: string[];
    };
} | {
    type: "STREAM_ERROR";
    payload: {
        messageId: string;
        error: string;
    };
} | {
    type: "STREAM_END";
} | {
    type: "CLEAR_CHAT";
    payload?: {
        keepStarter?: Message;
    };
} | {
    type: "SET_FOLLOW_UP";
    payload: string[];
};
export declare function chatRuntimeReducer(state: ChatRuntimeState, action: ChatRuntimeAction): ChatRuntimeState;
export declare function getInitialChatState(config: ChatRuntimeConfig, metadata: ChatRuntimeState["metadata"]): ChatRuntimeState;
