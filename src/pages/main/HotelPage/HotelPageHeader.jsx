import { Box, Typography } from '@mui/material'
import HeaderLogo from '../Header/HeaderLogo'
import FunctionOptions from '../Header/FunctionOptions'
import NavigationBar from '../Header/NavigationBar'
import Hotel from '../Filtering/Hotel'

function HotelPageHeader() {
  return (
    <Box className="main-hd-container relative bg-hotel-bg bg-cover pb-20">
      <Box className="main-hd-flex-icon px-8 flex">
        <HeaderLogo />
        <Box className="flex items-center ml-4">
          <NavigationBar />
        </Box>
        <FunctionOptions />
      </Box>
      <Box className="flex flex-col w-4/5 mx-auto my-12">
        <Box className="flex">
          <Typography
            variant="h3"
            sx={{ fontWeight: 'bold' }}
            className="mx-auto my-0 text-white"
          >
            호텔
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontWeight: 'bold' }}
            className="text-yellow-300"
          >
            .
          </Typography>
        </Box>

        <Box className="p-5 bg-white h-2/4 rounded-xl">
          <Hotel />
        </Box>
      </Box>
    </Box>
  )
}
export default HotelPageHeader
