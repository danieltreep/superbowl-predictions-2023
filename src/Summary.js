import React from 'react'

export default function Summary({teams, name, results, afcwildcard, nfcwildcard, afcdivisional, nfcdivisional, afcchampionship, nfcchampionship}) {

    return (
        <div className='summaryPage'>
        <h2 className='welcome'><img src={name} alt='ye'></img>'s predictions</h2>
            <div className='row6'>
                <div className='summaryMatch'>
                    <img src={teams.afcteams[5]} alt='bitches'></img>
                    <img src={teams.afcteams[4]} alt='bitches'></img>
                </div>
                <div className='summaryMatch'>
                    <img src={teams.afcteams[6]} alt='bitches'></img>
                    <img src={teams.afcteams[3]} alt='bitches'></img>
                </div>
                <div className='summaryMatch'>
                    <img src={teams.afcteams[7]} alt='bitches'></img>
                    <img src={teams.afcteams[2]} alt='bitches'></img>
                </div>
            </div>
            <div className='row4'>
                <div className='summaryMatch'>
                    <img src={teams.afcteams[afcwildcard[0]]} alt='bitches'></img>
                    <img src={teams.afcteams[afcwildcard[3]]} alt='bitches'></img>
                </div>
                <div className='summaryMatch'>
                    <img src={teams.afcteams[afcwildcard[1]]} alt='bitches'></img>
                    <img src={teams.afcteams[afcwildcard[2]]} alt='bitches'></img>
                </div>
            </div>
            <div className='row2'>
                <div className='summaryMatch'>
                    <img src={teams.afcteams[afcdivisional[0]]} alt='bitches'></img>
                    <img src={teams.afcteams[afcdivisional[1]]} alt='bitches'></img>
                </div>
            </div>
            <div className='superbowl'>
                <svg className={results.superbowl} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.921 3c-.368 4.506-1.953 7.23-3.372 9.669-.577.993-1.136 1.953-1.543 2.95-.408-.998-.969-1.959-1.548-2.953-1.422-2.437-3.011-5.161-3.379-9.666h9.842zm2.079-2h-14c0 9.803 5.105 13.053 5.604 17h2.805c.497-3.947 5.591-7.197 5.591-17zm-7 11.547c-1.125-2.563-1.849-5.599-1.857-8.547h-1.383c.374 3.118 1.857 7.023 3.24 8.547zm1.438 6.453h-2.866c-.202 1.187-.63 2.619-2.571 2.619v1.381h8v-1.381c-1.999 0-2.371-1.432-2.563-2.619zm7.08-1.596c-1.402-.634-2.609-.19-3.354.293.745-.484 1.603-1.464 1.595-3.003-2.591 1.038-2.295 2.496-2.765 3.345-.315.571-1.007.274-1.007.274l-.213.352c.365.193.989.319 1.716.319 1.307 0 2.949-.409 4.028-1.58zm2.444-4.022c-1.382.097-2.118 1.061-2.501 1.763.383-.702.614-1.942-.05-3.158-1.61 1.929-.752 2.958-.762 3.831-.004.427-.49.417-.49.417l.007.404c.314-.041 3.154-.717 3.796-3.257zm1.036-3.87c-1.171.426-1.56 1.473-1.718 2.175.158-.702.041-1.863-.835-2.75-.915 2.068.082 2.745.29 3.503.102.371-.325.606-.325.606l.29.179c.061-.029 2.385-1.332 2.298-3.713zm-.2-3.792c-.903.666-1.017 1.688-.974 2.335-.042-.646-.395-1.639-1.376-2.182-.264 2.018.769 2.349 1.142 2.95.182.294.023.658.023.658l.284-.019s.026-.127.169-.442c.291-.644 1.255-1.334.732-3.3zm-1.901-2.72s-.273.984-.045 1.732c.244.798.873 1.361.873 1.361s.34-.873.099-1.733c-.222-.792-.927-1.36-.927-1.36zm-12.67 15.665l-.213-.352s-.691.297-1.007-.274c-.47-.849-.174-2.307-2.765-3.345-.008 1.539.85 2.52 1.595 3.003-.745-.484-1.952-.927-3.354-.293 1.078 1.171 2.721 1.581 4.028 1.581.727-.001 1.35-.127 1.716-.32zm-4.393-2.027l.007-.404s-.486.01-.49-.417c-.009-.873.848-1.901-.762-3.831-.664 1.216-.433 2.457-.05 3.158-.383-.702-1.12-1.666-2.501-1.763.642 2.541 3.482 3.217 3.796 3.257zm-2.533-3.413l.29-.179s-.427-.236-.325-.606c.208-.758 1.205-1.435.29-3.503-.876.887-.994 2.048-.835 2.75-.158-.702-.546-1.749-1.718-2.175-.088 2.381 2.236 3.684 2.298 3.713zm-1.366-4.204c.143.315.169.442.169.442l.284.019s-.159-.364.023-.658c.373-.601 1.405-.933 1.142-2.95-.983.542-1.335 1.534-1.377 2.181.042-.647-.072-1.67-.974-2.335-.523 1.966.441 2.656.733 3.301zm.241-4.661c-.24.86.099 1.733.099 1.733s.629-.563.873-1.361c.228-.748-.045-1.732-.045-1.732s-.705.568-.927 1.36z"/></svg>
                <div className='summaryMatch'>
                    <img src={teams.afcteams[afcchampionship[0]]} alt='bitches'></img>
                    <img src={teams.nfcteams[nfcchampionship[0]]} alt='bitches'></img>
                </div>
            </div>
            <div className='row2'>
                <div className='summaryMatch'>
                    <img src={teams.nfcteams[nfcdivisional[0]]} alt='bitches'></img>
                    <img src={teams.nfcteams[nfcdivisional[1]]} alt='bitches'></img>
                </div>
            </div>
            <div className='row4'>
                <div className='summaryMatch'>
                    <img src={teams.nfcteams[nfcwildcard[0]]} alt='bitches'></img>
                    <img src={teams.nfcteams[nfcwildcard[3]]} alt='bitches'></img>
                </div>
                <div className='summaryMatch'>
                    <img src={teams.nfcteams[nfcwildcard[1]]} alt='bitches'></img>
                    <img src={teams.nfcteams[nfcwildcard[2]]} alt='bitches'></img>
                </div>
            </div>
            <div className='row6'>
                <div className='summaryMatch'>
                    <img src={teams.nfcteams[5]} alt='bitches'></img>
                    <img src={teams.nfcteams[4]} alt='bitches'></img>
                </div>
                <div className='summaryMatch'>
                    <img src={teams.nfcteams[6]} alt='bitches'></img>
                    <img src={teams.nfcteams[3]} alt='bitches'></img>
                </div>
                <div className='summaryMatch'>
                    <img src={teams.nfcteams[7]} alt='bitches'></img>
                    <img src={teams.nfcteams[2]} alt='bitches'></img>
                </div>
            </div>
        </div>
    )
}
