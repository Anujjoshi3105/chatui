import { AgentInfo } from '../../hooks/use-chatbot-api';
interface AgentSelectorProps {
    agents: AgentInfo[];
    loading?: boolean;
    onSelect: (agentKey: string) => void;
    selectedKey?: string;
    className?: string;
}
export declare function AgentSelector({ agents, loading, onSelect, selectedKey, className }: AgentSelectorProps): import("react/jsx-runtime").JSX.Element;
export default AgentSelector;
