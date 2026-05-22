import type { InfoTable as InfoTableType } from '@/data/types';

export default function InfoTable({ title, headers, rows }: InfoTableType) {
  return (
    <div className="overflow-hidden border border-accent-cyan/40 bg-bg-primary/50">
      {title && (
        <div className="border-b border-accent-cyan/40 bg-bg-surface px-4 py-2">
          <p className="terminal-heading text-xs uppercase tracking-[0.22em] text-accent-cyan">{title}</p>
        </div>
      )}
      <div className="overflow-x-auto overscroll-x-contain">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-accent-cyan/40 bg-bg-surface">
              {headers.map((header, i) => (
                <th
                  key={i}
                  className="terminal-heading px-4 py-2.5 text-left text-xs uppercase tracking-[0.18em] text-accent-cyan"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr
                key={ri}
                className={[
                  'border-b border-accent-cyan/10 last:border-0',
                  row.highlight
                    ? 'bg-accent-cyan/8 text-text-primary'
                    : ri % 2 === 1
                      ? 'bg-bg-surface/30'
                      : 'bg-transparent',
                ].join(' ')}
              >
                {row.cells.map((cell, ci) => (
                  <td
                    key={ci}
                    className={[
                      'terminal-heading px-4 py-2 text-sm',
                      ci === 0 ? 'text-accent-green' : 'text-text-primary',
                    ].join(' ')}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
