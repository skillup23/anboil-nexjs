const Heading = ({ tag, text, color }) => {
  const Tag = tag || 'h2';
  const Color = color || '--second-color'
  return (
  <div>
    <Tag className="heading font__extra">{text}</Tag>
    <style jsx>{`
      .heading {
        color: var(${Color});
        font-size: 34px;
        margin-bottom: 48px;
        text-align: center;
      }
    `}</style>
  </div>
  )
}

export default Heading;