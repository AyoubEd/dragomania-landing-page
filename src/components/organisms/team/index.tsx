import React from 'react'
import ListTeam from '../../molecules/list/ListTeam'
import TitleSection from '../../molecules/TitleSection'

const Team : React.FC = () => {
    return (
        <div className='container mx-auto'>
            <TitleSection
                title='Our Team'
                subtitle=''
                classes='text-center mb-10 colorfull_text arrow_title glowing_txt'
            />

            <ListTeam />
        </div>
    )
}

export default Team
