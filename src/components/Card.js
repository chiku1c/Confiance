import MuiBox from '@mui/material/Box'
import MuiCard from '@mui/material/Card'
import MuiCardContent from '@mui/material/CardContent'
import MuiCardMedia from '@mui/material/CardMedia'
import MuiStack from '@mui/material/Stack'
import MuiTypography from '@mui/material/Typography'
import Bg from "../assest/image/BG.jpg"
import Profile from "../assest/image/Profile.jpg"



const ProfileCardComponent = ({ name }) => {
    return (
        <><MuiCard
            sx={{
                width: 320,
                borderRadius: '1rem',
                boxShadow: '0px 48px 100px 0px rgba(17, 12, 46, 0.1)',
                zIndex: 0,
            }}
        >
            <MuiCardContent
                sx={{
                    position: 'relative',
                    padding: 0,
                }}
            >
                <MuiCardMedia sx={{ position: 'absolute' }} component="img" image={Bg} />
            </MuiCardContent>

            <MuiCardContent sx={{ marginTop: '3em' }}>
                <MuiCardMedia
                    sx={{
                        position: 'relative',
                        width: '50px',
                        height: '50px',
                        margin: '8em auto 0 auto', 
                        borderRadius: '100%',
                        border: '4px solid transparent',
                        borderColor: 'background.paper',
                    }}
                    component="img"
                    image={Profile}
                />
                <MuiTypography
                    variant="h6" component="h1" color="text.primary" textAlign="center" sx={{
                        fontWeight: 700,
                    }} gutterBottom>
                    Jayvion Simon
                </MuiTypography>
                <MuiTypography variant="subtitle1" color="text.secondary" textAlign="center" gutterBottom>
                    HR manger
                </MuiTypography>
                <MuiStack direction="row" justifyContent="space-around" alignItems="center" spacing={2}>
                    <MuiBox sx={{ textAlign: 'center' }}>
                        <MuiTypography variant="caption" color="text.secondary">
                            Following
                        </MuiTypography>
                        <MuiTypography variant="h6" color="text.primary" sx={{ fontWeight: 700 }}>
                            80K
                        </MuiTypography>
                    </MuiBox>
                    <MuiBox sx={{ textAlign: 'center' }}>
                        <MuiTypography variant="caption" color="text.secondary">
                            Followers
                        </MuiTypography>
                        <MuiTypography variant="h6" color="text.primary" sx={{ fontWeight: 700 }}>
                            803K
                        </MuiTypography>
                    </MuiBox>
                    <MuiBox sx={{ textAlign: 'center' }}>
                        <MuiTypography variant="caption" color="text.secondary">
                            total Post
                        </MuiTypography>
                        <MuiTypography variant="h6" color="text.primary" sx={{ fontWeight: 700 }}>
                            1.4K
                        </MuiTypography>
                    </MuiBox>
                </MuiStack>
            </MuiCardContent>
        </MuiCard></>

    )
}

export default ProfileCardComponent



