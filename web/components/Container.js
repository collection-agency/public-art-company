const Container = ({ children, className }) => {
  return (
    <div className={`container mx-auto ${(className ? className : '')}`}>{children}</div>
  )
}

export default Container
