import "./Fonts-grid.css";

interface FontsGridProps {
  tokens: Record<string, string>;
  hasRemValue?: boolean;
}

export function FontsGrid({ tokens, hasRemValue = false }: FontsGridProps) {
  return (
    <table className="fonts-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValue && <th>Pixels</th>}
        </tr>
      </thead>
      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
              {hasRemValue && (
                <td>{Number(value.replace("rem", "")) * 16}px</td>
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
