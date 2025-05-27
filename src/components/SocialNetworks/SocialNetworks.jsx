import '../SocialNetworks/socialnetwork.style.css'
import facebook from '../../assets/socialnetworkicons/facebook.svg';
import github from '../../assets/socialnetworkicons/github.svg';
import twitter from '../../assets/socialnetworkicons/twitter.svg';
import website from '../../assets/socialnetworkicons/website.svg';
import linkedin from '../../assets/socialnetworkicons/linkedin.svg';

const SocialNetwork = ( { facebookUrl,twitterUrl, githubUrl, websiteUrl, linkedinUrl} ) => {
    return (
            <div className='social_networks'>
                <a href={facebookUrl} target='_blank'><img src={facebook}/></a>
                <a href={githubUrl} target='_blank'><img src={github}/></a>
                <a href={twitterUrl} target='_blank'><img src={twitter}/></a>
                <a href={websiteUrl} target='_blank'><img src={website}/></a>
                <a href={linkedinUrl} target='_blank'><img src={linkedin}/></a>
            </div>
    )
};

export default SocialNetwork;