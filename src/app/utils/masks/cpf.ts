export default (v: string): string => {
  v=v.replace(/\D/g,"")
  v=v.replace(/(\d{3})(\d)/,"$1.$2")
  v=v.replace(/(\d{3})(\d)/,"$1.$2")

  v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
  return v
}
