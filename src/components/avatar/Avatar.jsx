const Avatar = props => {
  const { size = 100, src } = props;

  return (
    <img
      src={src}
      alt="Profile picture"
      height={size}
      width={size}
      style={{
        borderRadius: "50%"
      }}
    />
  );
};

export default Avatar;
