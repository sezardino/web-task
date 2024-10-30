function Text({ className, color, size, style, tag: Tag = "p", children }) {
  const textStyle = {
    color: color || "black",
    fontSize: size || "16px",
    ...style,
  };

  return (
    <Tag className={className} style={textStyle}>
      {children}
    </Tag>
  );
}

export default Text;
