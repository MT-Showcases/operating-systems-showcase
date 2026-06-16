import type { UserGroupNode } from '@/data/types';

function RootNode({ node }: { node: UserGroupNode }) {
  return (
    <div className="flex justify-center">
      <div className="border-2 border-accent-amber/70 bg-accent-amber/5 px-8 py-3 text-center min-w-[160px]">
        <p className="terminal-heading text-[9px] uppercase tracking-[0.24em] text-accent-amber/60">sistema</p>
        <p className="terminal-heading mt-0.5 text-sm font-semibold text-accent-amber">{node.label}</p>
        {node.meta && <p className="mt-0.5 text-[10px] text-text-secondary">{node.meta}</p>}
      </div>
    </div>
  );
}

function GroupCard({ node }: { node: UserGroupNode }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-px h-5 bg-accent-cyan/25" />
      <div className="w-full border-2 border-accent-cyan/50 bg-bg-surface p-3">
        <p className="terminal-heading text-[9px] uppercase tracking-[0.22em] text-accent-cyan/60">gruppo</p>
        <p className="terminal-heading mt-0.5 text-sm font-semibold text-accent-cyan">{node.label}</p>
        {node.meta && (
          <p className="mt-1 text-[10px] leading-4 text-accent-amber/70">{node.meta}</p>
        )}
        {node.children && node.children.length > 0 && (
          <div className="mt-3 space-y-1.5 border-t border-accent-cyan/20 pt-2">
            {node.children.map((user) => (
              <div key={user.id} className="flex items-start gap-2">
                <span className="mt-px shrink-0 text-accent-green/50 text-[10px]">●</span>
                <div className="min-w-0">
                  <span className="terminal-heading text-xs text-accent-green">{user.label}</span>
                  {user.meta && (
                    <p className="text-[10px] text-text-secondary leading-4">{user.meta}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function UserGroupTree({ root }: { root: UserGroupNode }) {
  const groups = root.children ?? [];

  return (
    <div className="select-none">
      <RootNode node={root} />

      {groups.length > 0 && (
        <>
          {/* Connector: vertical line down from root, then horizontal bar */}
          <div className="flex justify-center">
            <div className="w-px h-4 bg-accent-amber/30" />
          </div>
          <div className="relative mx-auto" style={{ width: `${Math.min(groups.length, 3) * 33.33}%`, minWidth: '100%' }}>
            <div className="absolute top-0 left-[16.66%] right-[16.66%] h-px bg-accent-cyan/25" />
          </div>

          {/* Groups grid */}
          <div className={`grid gap-3 ${groups.length === 2 ? 'grid-cols-2' : groups.length >= 3 ? 'grid-cols-1 sm:grid-cols-3' : 'grid-cols-1'}`}>
            {groups.map((group) => (
              <GroupCard key={group.id} node={group} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
