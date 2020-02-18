import React from 'react'
import DocumentTitle from 'react-document-title'

export default function Reward() {
  return (
    <DocumentTitle title="Congratulations!">
      <>
        <iframe className="youtube"
          title="youtube"
          width="100%" height="100%"
          src="https://www.youtube.com/embed/pXYHCzswwbg?autoplay=1"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>

        <div className="congrat">CHÚC MỪNG BẠN <br />ĐÃ TRẢ LỜI ĐÚNG HẾT CÁC CÂU HỎI</div>
      </>
    </DocumentTitle>
  )
}
