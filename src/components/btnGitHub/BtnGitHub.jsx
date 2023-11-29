import gitHub from './gitHub-black.svg'

const BtnGitHub = ({link}) => {
  return (
    <a href={link}  target='_blank' rel='noreferrer' className="btn-outline">
      <img src="./img/icons/gitHub-black.svg" alt="" />
      GitHub repo
    </a>
  )
}

export default BtnGitHub
