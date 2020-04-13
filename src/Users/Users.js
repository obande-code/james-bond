import React, { Component } from 'react'
import UserItem from "../UserItem/UserItem"

 class Users extends Component {
    state = {
        users : [
            {
                id : '1',
                image : 'https://resizing.flixster.com/EvwWhrDj1Sj7Tug3EFa1OhcsDKs=/206x305/v1.bTsxMTIwNDMwMDtqOzE4NDQ0OzEyMDA7MTIwMDsxNjAw',
                name : 'Sean Connery',
                title : 'Dr. No (1962)',
                synopsis : 'The very first James Bond film sees Scottish actor Sean Connery bring the British character to life on the big screen. Agent 007 goes to Jamaica to investigate the death of a British intelligence chief.'
                
               },
   
               {
                   id : '2',
                   image : 'https://upload.wikimedia.org/wikipedia/en/a/ad/From_Russia_with_Love_%E2%80%93_UK_cinema_poster.jpg',
                   name : 'Sean Connery',
                   title : 'From Russia with Love (1963)',
                   synopsis : 'The second Bond film fleshes out the Spectre organisation, by showing its numerical hierarchy. Number 5 in Spectre, a chess grandmaster named Kronsteen...'
                   
                  },

                  {
                    id : '3',
                    image : 'https://images-na.ssl-images-amazon.com/images/I/71BAWN422HL._SY445_.gif',
                    name : 'Sean Connery',
                    title : 'Goldfinger (1964)',
                    synopsis : 'James Bond is up against one of the greatest villains of all time, the gold-obsessed Auric Goldfinger. Goldfinger hatches a plan to steal all the gold from Fort Knox in the US and only 007 can stop him.'
                    
                   },
                   {
                    id : '4',
                    image : 'https://www.movieloci.com/img/1442-Thunderball/cover/1385754124-2196-0-Thunderball.jpg',
                    name : 'Sean Connery',
                    title : 'Thunderball (1965)',
                    synopsis : 'Spectre has hijacked a plane loaded with two atomic bombs and is demanding a ransom of £100 million in diamonds. Bond is on the case to find the two bombs, and he tracks a lead to...'
                    
                   }
        ]
    }
    render() {
        return (
            <div style={styleUser}>
                {this.state.users.map(user=>(
                        <UserItem key={user.id} user={user} />
                ))};
            </div>
        )
    }
}

export default Users
const styleUser = {
    display : 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gridGap: '40px'
   
}