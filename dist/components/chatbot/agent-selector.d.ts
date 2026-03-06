import { AgentInfo } from '../../core/services/types';
interface AgentSelectorProps {
    agents: AgentInfo[];
    loading?: boolean;
    onSelect: (agentKey: string) => void;
    selectedKey?: string;
    className?: string;
}
export declare function AgentSelector({ agents, loading, onSelect, selectedKey, className }: AgentSelectorProps): import("react/jsx-runtime").JSX.Element;
export default AgentSelector;
