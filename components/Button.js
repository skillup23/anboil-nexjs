// import './Button.css';
import Link from 'next/link';

function Button({ text }) {
  return (
    <div>
      <Link href="/">
        <a className="font__extra">
          <p>{text}</p>
        </a>
      </Link>
      <style jsx>{`
      a {
        position: relative;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        background-color: #EE0A0E;
        height: 50px;
        padding: 0 34px 0 34px;
        text-decoration: none;
        transform: skewX(-15deg);
        transition: .3s ease;
        margin-left: 6px;
      }
      
      a:hover {
        background-color: #D00005;
      }
      
      p {
        transform: skewX(15deg);
        color: white;
        font-size: 25px;
        line-height: 50px;
      }
    `}</style>
    </div>
  );
}

export default Button;