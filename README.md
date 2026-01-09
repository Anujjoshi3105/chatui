# ChatUI

A premium, highly customizable React chatbot library designed for modern web applications. It features a sleek UI, real-time streaming, markdown support, and seamless backend integration. Both full-page and popup variants are supported.

## Features

- **Premium UI**: Beautifully designed modern aesthetics using Tailwind CSS.
- **Real-time Streaming**: Supports Server-Sent Events (SSE) for type-writer effect responses.
- **Markdown Support**: Renders rich text, code blocks, and tables using `react-markdown`.
- **Multiple Modes**:
  - **FullChatbot**: A full-screen chat interface.
  - **PopupChatbot**: A floating chat widget with a toggle button.
  - **Chatbot**: The core component for custom integrations.
- **Configurable**: extensive props for avatars, placeholder text, initial prompts, and more.
- **Agent & Model Selection**: Built-in UI for selecting different AI agents and models (configurable).
- **Voice Support**: Built-in speech-to-text and text-to-speech (Chromium browsers only).
- **Feedback System**: Integrated thumbs up/down user feedback mechanism.
- **Thread Management**: Automatic handling of conversation threads and user sessions.

## Installation

```bash
git clone https://github.com/anujjoshi3105/chatui.git
```

*Note: If you are installing from a local build, point to the local tarball or directory.*

## Usage

### 1. Import Styles

You **must** import the library's CSS file in your application's entry point (e.g., `main.tsx` or `App.tsx`):

```tsx
import "chatui/dist/chatui.css";
```

### 2. Using Components

#### Popup Chatbot

The most common use case – a floating chat widget.

```tsx
import { PopupChatbot } from "chatui";

function App() {
  return (
    <PopupChatbot
      url="http://localhost:8080"
      agent="support-agent"
      model="ollama"
      position="bottom-right"
      placeholder="Ask me anything..."
      starterMessage="👋 Hello! I'm here to help you. Feel free to ask me anything!"
      showHeader={true}
      stream={true}
      storageKey="my-chat-session"
    />
  );
}
```

#### Full Page Chatbot

For a dedicated chat page.

```tsx
import { FullChatbot } from "chatui";

function ChatPage() {
  return (
    <div className="h-screen w-full">
      <FullChatbot
        url="http://localhost:8080"
        agent="support-agent"
        showHeader={true}
        starterPrompt="How can I help you today?"
      />
    </div>
  );
}
```

#### Base Chatbot Component

For embedding the chat interface into a custom container (e.g., sidebars, modals).

```tsx
import { Chatbot } from "chatui";

function EmbeddedChat() {
  return (
    <div className="custom-chat-container">
      <Chatbot
        url="http://localhost:8080"
        agent="support-agent"
      />
    </div>
  );
}
```

## Props API

### `ChatbotProps` (Base Component)
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `url` | `string` | **Required** | Base URL of the backend API. |
| `agent` | `string` | `undefined` | ID of the agent to communicate with. |
| `model` | `string` | `undefined` | ID of the LLM model to use. |
| `header` | `ChatbotHeaderProps` | `{ show: true }` | Configuration for the chatbot header. |
| `footer` | `ChatbotFooterProps` | `{ show: true }` | Configuration for the chatbot footer. |
| `starter` | `ChatbotStarterProps` | `{}` | Configuration for initial messages and suggestions. |
| `placeholder` | `string` | `"Ask AI..."` | Placeholder text for the input field. |
| `stream` | `boolean` | `true` | Enable/disable real-time response streaming. |
| `storageKey` | `string` | `undefined` | Key for persisting session/thread ID in local storage. |
| `threadId` | `string` | `undefined` | Explicit thread ID for the conversation. |
| `userId` | `string` | `undefined` | Explicit user ID. |
| `className` | `string` | `undefined` | Extra CSS classes for the main container. |

### `ChatbotHeaderProps`
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `show` | `boolean` | `true` | Whether to show the header. |
| `title` | `string` | `undefined` | Main title text. |
| `titleUrl` | `string` | `undefined` | URL to link the title to. |
| `subtitle` | `string` | `undefined` | Subtitle text below the title. |
| `avatar` | `string` | `undefined` | URL of the avatar image. |
| `allowMaximize` | `boolean` | `false` | Show maximize/minimize button (handled automatically in PopupChatbot). |

### `ChatbotFooterProps`
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `show` | `boolean` | `true` | Whether to show the footer. |
| `text` | `string` | `undefined` | Text content to display in the footer. |
| `subtitle` | `string` | `undefined` | Additional subtitle text in the footer. |

### `ChatbotStarterProps`
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `message` | `string` | `undefined` | Initial greeting message from the assistant. |
| `suggestions` | `string[]` | `[]` | List of initial suggestion chips for the user to click. |

### `PopupChatbotProps` (Extends `ChatbotProps`)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `position` | `"bottom-right" \| "bottom-left" \| "top-right" \| "top-left"` | `"bottom-right"` | Position of the floating button on screen. |
| `children` | `ReactNode` | `<MessageCircle />` | Content to render inside the toggle button. |
| `buttonStyle` | `CSSProperties` | `undefined` | Inline styles for the toggle button. |
| `buttonClassName` | `string` | `undefined` | Custom CSS classes for the toggle button. |
| `popupClassName` | `string` | `undefined` | Custom CSS classes for the open popup window. |
| `defaultOpen` | `boolean` | `false` | Whether the popup is open by default. |
| `width` | `number \| string` | `450` | Width of the popup window. |
| `height` | `number \| string` | `600` | Height of the popup window. |

## Backend Integration



This project is fully compatible with the **[Agent Service Toolkit](https://github.com/JoshuaC215/agent-service-toolkit)**. It implements the necessary API contract to communicate with agents, supporting streaming responses, tool calls, and feedback mechanisms out of the box.

This library is designed to work with a backend that supports the following API contract:

### 1. Service Info
`GET /info`
Returns available agents and models.
```json
{
  "agents": [{"id": "agent-1", "name": "Support Bot"}],
  "models": [{"id": "gpt-4", "name": "GPT-4"}]
}
```

### 2. Chat Stream
`POST /{agent_id}/stream`
Streams the chat response. Expects a JSON body with `{ message: "..." }`.
**Response**: Server-Sent Events (SSE).

**Event Types:**
- `message`: A complete JSON object of the message state.
- `token`: A string chunk of the response text (for streaming).
- `update`: A JSON object containing partial updates (e.g., suggested follow-up questions).
- `error`: Error message string.

### 3. Feedback
`POST /feedback`
Submits user feedback (thumbs up/down).
```json
{
  "run_id": "...",
  "bot_id": "...",
  "score": 1, 
  "text": "Optional comment"
}
```

## Dependencies

This project relies on the following key open-source libraries:

*   **React 19**: Core UI library.
*   **Tailwind CSS 4**: Utility-first CSS framework for styling.
*   **Framer Motion**: For smooth animations and transitions.
*   **Radix UI**: Accessible, unstyled primitives for complex components (Dialog, Popover, Tooltip, etc.).
*   **Lucide React**: Beautiful & consistent icons.
*   **React Markdown**: For rendering rich text response content.
*   **Sonner**: For toast notifications.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build the library
npm run build
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

