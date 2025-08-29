import React, { useRef, useState, useEffect } from "react";

export default function Userefs() {
  //focus
  const inputref = useRef(null);

  const focusInput = () => {
    inputref.current.focus();
  };

  //timer
  const [sec, setSec] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSec((s) => s + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  //image
  const [newimg, setnewimg] = useState(true);
  const [imageUrl, setImageUrl] = useState("");
  const imageRef = useRef(0);

  const handleimage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setImageUrl(preview);
      setnewimg(false);
    }
  };

  return (
    <div>
      {/* //focus */}
      <input type="text" ref={inputref} placeholder="Name...." />
      <button onClick={focusInput}>Focus</button>
      {/* timer */}
      <p>timer:{sec}</p>
      <button onClick={() => clearInterval(intervalRef.current)}>stop</button>
      {/* img */}
      <input
        type="file"
        accept="image/*"
        ref={imageRef}
        onClick={handleimage}
        hidden
      />
      {newimg ? (
        <div onClick={() => imageRef.current.click()} className="container">
          upload image
        </div>
      ) : (
        <img
          className="img"
          onClick={() => imageRef.current.click()}
          src={imageUrl}
          alt=""
        />
      )}
    </div>
  );
}
