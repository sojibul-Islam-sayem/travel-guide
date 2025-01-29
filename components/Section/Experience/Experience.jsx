import SectionHeader from '@/components/SectionHeader/SectionHeader'
import './Experience.css'

const Experience = () => {
    return (
        <section>
            <SectionHeader heading='Discover Your' highlighted='Perfect ' subHeading='Travel Experience' />
            <div className='experienceBox'>
                <div className='experienceCard'>
                    <h3>Logo</h3>
                    <h2 className=''>Personalized Travel Itineraries</h2>
                    <p className=''>Receive personalized travel plans crafted
                        specifically to fit your unique interests,
                        preferences, and schedule seamlessly.</p>
                    <button className=''>See More</button>
                </div>
                <div className='experienceCard'>
                    <h3>Logo</h3>
                    <h2 className=''>Personalized Travel Itineraries</h2>
                    <p className=''>Receive personalized travel plans crafted
                        specifically to fit your unique interests,
                        preferences, and schedule seamlessly.</p>
                    <button className=''>See More</button>
                </div>
                <div className='experienceCard'>
                    <h3>Logo</h3>
                    <h2 className=''>Personalized Travel Itineraries</h2>
                    <p className=''>Receive personalized travel plans crafted
                        specifically to fit your unique interests,
                        preferences, and schedule seamlessly.</p>
                    <button className=''>See More</button>
                </div>
                <div className='experienceCard'>
                    <h3>Logo</h3>
                    <h2 className=''>Personalized Travel Itineraries</h2>
                    <p className=''>Receive personalized travel plans crafted
                        specifically to fit your unique interests,
                        preferences, and schedule seamlessly.</p>
                    <button className=''>See More</button>
                </div>
            </div>
        </section>
    )
}

export default Experience