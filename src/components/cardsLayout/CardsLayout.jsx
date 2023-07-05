const CardsLayout = props => {
  const { children, columns = 2 } = props;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: 20
      }}
    >
      {children}
    </div>
  );
};

export default CardsLayout;
