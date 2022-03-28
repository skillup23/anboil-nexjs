const Heading = ({ tag, text }) => {
  const Tag = tag || 'h2';
  return (
  <div>
    <Tag className="heading font__extra">{text}</Tag>
    <style jsx>{`
      .heading {
        color: #EE0A0E;
        font-size: 34px;
        margin-bottom: 48px;
        text-align: center;
      }
    `}</style>
  </div>
  )
}

export default Heading;