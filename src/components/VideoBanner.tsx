function VideoBanner(): JSX.Element {
  return (
    <div className="aspect-w-16 aspect-h-9 ">
      <iframe title="Main Video" className="w-full h-full" src="https://www.youtube.com/embed/GuZqAyl4oxc?rel=0&amp;autoplay=1" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  )
}

export default VideoBanner;
