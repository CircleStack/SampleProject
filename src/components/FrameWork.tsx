import { Box, Typography, Grid, Stack, Button } from '@mui/material';

const Framework = () => {
  return (
    <Box sx={{ textAlign: 'center', marginTop: '250px' }}>
      <Typography
        variant="h2"
        className="customers_title__0hAia gradient-text"
        sx={{
          fontFamily: 'Arial, sans-serif',
          fontSize: '40px',
          fontWeight: 700,
          lineHeight: "1.2",
          marginBottom: "80px",
        }}
      >
        The framework of choice <span data-break="true"></span> when it matters
      </Typography>
      <Grid container spacing={1} sx={{ marginTop: '32px', maxWidth: '100%' }}>
  <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'center', marginLeft: '-40px' }}>
    <Box
      component="img"
      alt="Audible's website"
      src="https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpreview-audible.6063405a.png&w=640&q=75"
      sx={{
        width: '388px',
        height: '316px',
        objectFit: 'cover',
        borderRadius: '4px',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)'
        }
      }}
    />
    <Typography
      variant="body1"
      sx={{
        marginTop: '8px',
        fontFamily: 'Arial, sans-serif',
        fontWeight: 600
      }}
    >
      Audible
    </Typography>

    <Box
      component="img"
      alt=" Sonos's website"
      src="https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpreview-sonos.a3dbc334.png&w=640&q=75"
      sx={{
        width: '388px',
        height: '210px',
        objectFit: 'cover',
        borderRadius: '4px',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)'
        }
      }}
    />
    <Typography
      variant="body1"
      sx={{
        marginTop: '8px',
        fontFamily: 'Arial, sans-serif',
        fontWeight: 600
      }}
    >
      Sonos
    </Typography>
  </Grid>
  <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'center', marginLeft: "15px" }}>
    <Box
      component="img"
      alt=" Twitch's website"
      src="https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpreview-twitch.4ed9ddb3.png&w=640&q=75"
      sx={{
        width: "302px",
        height: '538px',
        objectFit: 'cover',
        borderRadius: '8px',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)'
        }
      }}
    />
    <Typography
      variant="body1"
      sx={{
        marginTop: '8px',
        fontFamily: 'Arial, sans-serif',
        fontWeight: 600
      }}
    >
      Twitch
    </Typography>
  </Grid>
  <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'center', marginLeft: "-18px", marginRight: "45px" }}>
    <Box
      component="img"
      alt="Notion's website"
      src="https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpreview-notion.2bd1f0c5.png&w=640&q=75"
      sx={{
        width: '390px',
        height: '312px',
        objectFit: 'cover',
        borderRadius: '8px',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)'
        }
      }}
    />
    <Typography
      variant="body1"
      sx={{
        marginTop: '8px',
        fontFamily: 'Arial, sans-serif',
        fontWeight: 600
      }}
    >
      Notion
    </Typography>
    <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
      <Box>
        <Box
          component="img"
          alt="Today's website"
          src="https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpreview-today.98d66e07.png&w=192&q=75"
          sx={{
            width: '179px',
            height: '125px',
            objectFit: 'cover',
            borderRadius: '8px',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)'
            }
          }}
        />
        <Typography
          variant="body1"
          sx={{
            marginTop: '8px',
            fontFamily: 'Arial, sans-serif',
            fontWeight: 600
          }}
        >
          Today
        </Typography>
      </Box>
      <Box>
        <Box
          component="img"
          alt="ProductHunt's website"
          src="https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpreview-ph.c43e26c6.png&w=192&q=75"
          sx={{
            width: '179px',
            height: '125px',
            objectFit: 'cover',
            borderRadius: '8px',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)'
            }
          }}
        />
        <Typography
          variant="body1"
          sx={{
            marginTop: '8px',
            fontFamily: 'Arial, sans-serif',
            fontWeight: 600
          }}
        >
          ProductHunt
        </Typography>
      </Box>
    </Stack>
  </Grid>
  <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'center', marginRight: '-20px' }}>
    <Box
      component="img"
      alt="Nike"
      src="https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpreview-nike.ae99d521.png&w=640&q=75"
      sx={{
        width: '390px',
        height: '312px',
        objectFit: 'cover',
        borderRadius: '8px',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)'
        }
      }}
    />
    <Typography
      variant="body1"
      sx={{
        marginTop: '8px',
        fontFamily: 'Arial, sans-serif',
        fontWeight: 600
      }}
    >
      Nike
    </Typography>

    <Box
      component="img"
      alt="Washington Post"
      src="https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpreview-wapo.2769ff64.png&w=640&q=75"
      sx={{
        width: '390px',
        height: '312px',
        objectFit: 'cover',
        borderRadius: '8px',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)'
        }
      }}
    />
    <Typography
      variant="body1"
      sx={{
        marginTop: '8px',
        fontFamily: 'Arial, sans-serif',
        fontWeight: 600
      }}
    >
      Washington Post
    </Typography>
  </Grid>
</Grid>

      <Box sx={{ marginTop: '50px' }}>
        <Typography
          variant="body1"
          className="customers_subtitle__W6oUd"
          sx={{
            fontFamily: 'Arial, sans-serif',
            fontSize: '20px',
            fontWeight: 400,
          }}
        >
          For <strong>performance</strong>, <strong>efficiency</strong> and <strong>developer experience</strong>.
          <span style={{ display: 'block' }}></span>
          Next.js is trusted by some of the biggest names on the web.
        </Typography>
      </Box>
      <Box sx={{ marginTop: '20px' }}>
        <Button variant="contained" sx={{
          backgroundColor: '#000',
          color: '#fff',
          height: '42px',
          fontSize: '16px',
          textTransform: 'none',
          ':hover': {
            backgroundColor: '#f0f0f0',
            color:"#000"
          },
        }}
        >
          View the Next.js Showcase
        </Button>
      </Box>
      <Grid container spacing={1} sx={{ marginTop: '50px', maxWidth: '100%' }}>
        
        <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'center', marginLeft: "100px",marginRight:"30px" }}>
          <Box
            sx={{
              backgroundColor: '#111',
              width: "400px",
              height: "300px",
              borderRadius: '8px',
              border: '1px solid #888',
              borderRight:"'1px solid #1111'"
            
            }}
          >
            
            <Typography
              variant="body2"
              sx={{ marginTop: '20px',alignContent:"center",marginRight:"10px",marginLeft:"10px", fontFamily: 'Arial, sans-serif',alignItems:"center", color: '#fff',fontSize:"16px",fontWeight:"400", }}
            >
              “With Next.js at the helm of our headless tech stack, our developers can create features with velocity and speed, ultimately enabling users to create whatever, whenever they want to.”
            </Typography>
            <Stack alignContent={"center"} alignItems={"flex-start"} marginLeft={"20px"}>
            <Box
      sx={{ marginTop: '90px', width: '100px', height: 'auto' }}
    >
      <svg
        aria-label="Loom's logo"
        fill="none"
        height="25"
        viewBox="0 0 133 41"
        width="81"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M50.9458 34.7106V5.38147H56.3305V34.7106H50.9458Z" fill="#FFF"></path>
        <path d="M102.592 14.7794H107.735V17.2109C108.827 15.2666 111.379 14.2125 113.565 14.2125C116.279 14.2125 118.465 15.3879 119.477 17.5342C121.055 15.1027 123.162 14.2125 125.794 14.2125C129.478 14.2125 133 16.4408 133 21.7874V34.7104H127.777V22.8821C127.777 20.7346 126.724 19.1148 124.254 19.1148C121.945 19.1148 120.568 20.8974 120.568 23.0449V34.7117H115.225V22.8821C115.225 20.7346 114.132 19.1148 111.702 19.1148C109.353 19.1148 107.976 20.857 107.976 23.0449V34.7117H102.592V14.7794Z" fill="#FFF"></path>
        <path d="M68.4996 35.288C62.4334 35.288 58.0406 30.7886 58.0406 24.7454C58.0406 18.7986 62.4192 14.1923 68.4996 14.1923C74.6095 14.1923 78.9586 18.8414 78.9586 24.7454C78.9586 30.7446 74.5632 35.288 68.4996 35.288ZM68.4996 19.0707C65.3708 19.0707 62.8258 21.6163 62.8258 24.7467C62.8258 27.877 65.3708 30.4226 68.4996 30.4226C71.6283 30.4226 74.172 27.877 74.172 24.7467C74.172 21.6163 71.6283 19.0707 68.4996 19.0707Z" fill="#FFF"></path>
        <path d="M90.4595 35.288C84.3933 35.288 80.0005 30.7886 80.0005 24.7454C80.0005 18.7986 84.3791 14.1923 90.4595 14.1923C96.5694 14.1923 100.918 18.8414 100.918 24.7454C100.918 30.7446 96.5208 35.288 90.4595 35.288ZM90.4595 19.003C87.295 19.003 84.7204 21.5795 84.7204 24.7442C84.7204 27.9091 87.295 30.4856 90.4595 30.4856C93.6238 30.4856 96.1986 27.9091 96.1986 24.7442C96.1973 21.5795 93.6227 19.003 90.4595 19.003Z" fill="#FFF"></path>
        <path d="M40.0926 17.817H28.3689L38.5222 11.955L36.2925 8.09189L26.1392 13.9538L31.9999 3.80141L28.1368 1.57037L22.2761 11.7228V0H17.8164V11.7239L11.9535 1.57037L8.09166 3.80029L13.9534 13.9527L3.80018 8.09189L1.57032 11.9539L11.7236 17.8158H0V22.2757H11.7225L1.57032 28.1376L3.80018 32.0007L13.9523 26.1399L8.09054 36.2923L11.9535 38.5222L17.8153 28.3687V40.0926H22.275V28.3698L28.1357 38.5222L31.9986 36.2923L26.1369 26.1388L36.2902 32.0007L38.5201 28.1376L28.3679 22.2767H40.0903V17.817H40.0926ZM20.0463 26.1117C16.6836 26.1117 13.9579 23.3862 13.9579 20.0233C13.9579 16.6605 16.6836 13.9348 20.0463 13.9348C23.409 13.9348 26.1346 16.6605 26.1346 20.0233C26.1346 23.3862 23.409 26.1117 20.0463 26.1117Z" fill="#FFF"></path>
      </svg>
    </Box>
            <Typography
              variant="body2"
              sx={{ marginTop: '10px', fontFamily: 'Arial, sans-serif',fontSize:"13px", color: '#fff'}}

            >
            Tatiana Mac, Senior Software Engineer
            </Typography>
            </Stack>
          </Box>
           
          
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'center' , marginRight:"13px" }}>
          <Box
            sx={{
              backgroundColor: '#111',
              width: "400px",
              height: "300px",
              borderRadius: '8px',
              border: '1px solid #888',
           
            }}
          >
          
            <Typography
              variant="body2"
              sx={{ marginTop: '20px',alignContent:"center",marginRight:"10px",marginLeft:"10px", fontFamily: 'Arial, sans-serif',alignItems:"center", color: '#fff',fontSize:"16px",fontWeight:"400", }}
            >
              “My favorite UX feedback from customers is: "How is the app so fast?" Because we’ve built on Next.js and Vercel since day one, our pages load in an instant, which is important when it comes to mission-critical software.”
            </Typography>
            <Stack alignContent={"center"} alignItems={"flex-start"} marginLeft={"20px"}>
            <Box sx={{ marginTop: '70px', width: '100px', height: 'auto' }}>
  <svg
    aria-label="Indent's logo"
    fill="none"
    height="20"
    viewBox="0 0 998 195"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M271.524 10.92V192.4H235.124V10.92H271.524ZM374.307 46.28C391.467 46.28 405.334 51.74 415.907 62.66C426.48 73.407 431.767 88.487 431.767 107.9V192.4H395.367V112.84C395.367 101.4 392.507 92.647 386.787 86.58C381.067 80.34 373.267 77.22 363.387 77.22C353.334 77.22 345.36 80.34 339.467 86.58C333.747 92.647 330.887 101.4 330.887 112.84V192.4H294.487V48.36H330.887V66.3C335.74 60.06 341.894 55.2067 349.347 51.74C356.974 48.1 365.294 46.28 374.307 46.28ZM444.021 119.86C444.021 105.3 446.881 92.387 452.601 81.12C458.495 69.8533 466.468 61.1867 476.521 55.12C486.575 49.0533 497.755 46.02 510.061 46.02C519.421 46.02 528.348 48.1 536.841 52.26C545.335 56.2467 552.095 61.62 557.121 68.38V0H594.041V192.4H557.121V171.08C552.615 178.187 546.288 183.907 538.141 188.24C529.995 192.573 520.548 194.74 509.801 194.74C497.668 194.74 486.575 191.62 476.521 185.38C466.468 179.14 458.495 170.387 452.601 159.12C446.881 147.68 444.021 134.593 444.021 119.86ZM557.381 120.38C557.381 111.54 555.648 104 552.181 97.76C548.715 91.347 544.035 86.493 538.141 83.2C532.248 79.733 525.921 78 519.161 78C512.401 78 506.161 79.647 500.441 82.94C494.721 86.233 490.041 91.087 486.401 97.5C482.935 103.74 481.201 111.193 481.201 119.86C481.201 128.527 482.935 136.153 486.401 142.74C490.041 149.153 494.721 154.093 500.441 157.56C506.335 161.027 512.575 162.76 519.161 162.76C525.921 162.76 532.248 161.113 538.141 157.82C544.035 154.353 548.715 149.5 552.181 143.26C555.648 136.847 557.381 129.22 557.381 120.38ZM750.492 117.26C750.492 122.46 750.146 127.14 749.452 131.3H644.152C645.019 141.7 648.659 149.847 655.072 155.74C661.486 161.633 669.372 164.58 678.732 164.58C692.252 164.58 701.872 158.773 707.592 147.16H746.852C742.692 161.027 734.719 172.467 722.932 181.48C711.146 190.32 696.672 194.74 679.512 194.74C665.646 194.74 653.166 191.707 642.072 185.64C631.152 179.4 622.572 170.647 616.332 159.38C610.266 148.113 607.232 135.113 607.232 120.38C607.232 105.473 610.266 92.387 616.332 81.12C622.399 69.8533 630.892 61.1867 641.812 55.12C652.732 49.0533 665.299 46.02 679.512 46.02C693.206 46.02 705.426 48.9667 716.172 54.86C727.092 60.7533 735.499 69.16 741.392 80.08C747.459 90.827 750.492 103.22 750.492 117.26ZM712.792 106.86C712.619 97.5 709.239 90.047 702.652 84.5C696.066 78.78 688.006 75.92 678.472 75.92C669.459 75.92 661.832 78.693 655.592 84.24C649.526 89.613 645.799 97.153 644.412 106.86H712.792ZM843.881 46.28C861.041 46.28 874.908 51.74 885.481 62.66C896.054 73.407 901.341 88.487 901.341 107.9V192.4H864.941V112.84C864.941 101.4 862.081 92.647 856.361 86.58C850.641 80.34 842.841 77.22 832.961 77.22C822.908 77.22 814.934 80.34 809.041 86.58C803.321 92.647 800.461 101.4 800.461 112.84V192.4H764.061V48.36H800.461V66.3C805.314 60.06 811.468 55.2067 818.921 51.74C826.548 48.1 834.868 46.28 843.881 46.28ZM965.336 78.26V147.94C965.336 152.793 966.462 156.347 968.716 158.6C971.142 160.68 975.129 161.72 980.676 161.72H997.576V192.4H974.696C944.016 192.4 928.676 177.493 928.676 147.68V78.26H911.516V48.36H928.676V12.74H965.336V48.36H997.576V78.26H965.336Z"
      fill="#FFFFFF"
    ></path>
    <mask
      height="156"
      id="mask0_3077_14632"
      maskUnits="userSpaceOnUse"
      width="140"
      x="0"
      y="23"
    >
      <path
        d="M0 100.914V44.9155C0.00387451 41.1367 1.00188 37.4255 2.89378 34.1544C4.78569 30.8833 7.50492 28.1676 10.7784 26.2799C14.0519 24.3922 17.7644 23.3989 21.5432 23.3999C25.322 23.4009 29.034 24.396 32.3066 26.2854L80.7664 54.2844L129.269 82.2839C132.533 84.1769 135.242 86.8939 137.126 90.1639C139.009 93.4339 140 97.1399 140 100.914C140 104.687 139.009 108.394 137.126 111.663C135.242 114.933 132.533 117.651 129.269 119.544L80.7664 147.543L32.2635 175.542C28.9921 177.421 25.2846 178.407 21.5121 178.403C17.7397 178.398 14.0345 177.403 10.7676 175.516C7.50065 173.63 4.78651 170.918 2.89682 167.653C1.00715 164.388 0.00820175 160.684 0 156.912V100.914Z"
        fill="#fffff"
      ></path>
    </mask>
    <g mask="url(#mask0_3077_14632)">
      <path
        d="M0 100.914V44.9155C0.00387451 41.1367 1.00188 37.4255 2.89378 34.1544C4.78569 30.8833 7.50493 28.1676 10.7784 26.2799C14.0519 24.3922 17.7644 23.3989 21.5432 23.3999C25.322 23.4009 29.034 24.396 32.3066 26.2854L80.7664 54.2844L129.269 82.2839C132.533 84.1769 135.242 86.8939 137.126 90.1639C139.009 93.4339 140 97.1399 140 100.914C140 104.687 139.009 108.394 137.126 111.663C135.242 114.933 132.533 117.651 129.269 119.544L80.7664 147.543L32.2635 175.542C28.9921 177.421 25.2846 178.407 21.5121 178.403C17.7397 178.398 14.0345 177.403 10.7676 175.516C7.50065 173.63 4.78651 170.918 2.89682 167.653C1.00714 164.388 0.00821228 160.684 0 156.912V100.914Z"
        fill="#FFF"
      ></path>
      <path
        d="M192.355 19.3999H46.3555V178.4H192.355V19.3999Z"
        fill="#ffff"
        fill-opacity="0.4"
      ></path>
      <path
        d="M233.355 28.3999H87.3555V187.4H233.355V28.3999Z"
        fill="#ffff"
        fill-opacity="0.4"
      ></path>
    </g>
  </svg>
</Box>

            <Typography
              variant="body2"
              sx={{ marginTop: '10px', fontFamily: 'Arial, sans-serif',fontSize:"13px", color: '#fff' }}

            >
           Fouad Matin, CEO
            </Typography>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'center',marginLeft:"20px" }}>
          <Box
            sx={{
              backgroundColor: '#111',
              width: "400px",
              height: "300px",
              borderRadius: '8px',
              border: '1px solid #888',
              
            }}
          >
         
            <Typography
              variant="body2"
              sx={{ marginTop: '20px',alignContent:"center",marginRight:"10px",marginLeft:"10px", fontFamily: 'Arial, sans-serif',alignItems:"center", color: '#fff',fontSize:"16px",fontWeight:"400", }}
            >
              “Next.js has been a game-changer for our agency work and team collaboration. Its powerful features have allowed us to build high-performance websites quickly and efficiently like never before.”
            </Typography>
            <Stack alignContent={"center"} alignItems={"flex-start"} marginLeft={"20px"}>
            <Box
      component="div"
      alt="Wunderman Thompson's logo"
      sx={{ marginTop: '75px', width: '100px', height: 'auto' }}
      dangerouslySetInnerHTML={{
        __html: `
          <svg aria-label="Wunderman Thompson's logo" fill="none" height="36" viewBox="0 0 1000 348" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_3077_14635)">
              <path d="M91.631 34.1735H57.4575V0H34.217V34.1735H0V57.414H34.217V91.5875H57.4575V57.414H91.631V34.1735Z" fill="#A4A4A4"></path>
              <path d="M683.593 123.273C683.568 105.808 669.416 91.6548 651.95 91.6309H617.202V195.969H628.849V154.907H651.95C652.846 154.907 653.733 154.864 654.629 154.777L673.468 195.969H686.271L665.91 151.672C676.693 146.304 683.534 135.319 683.593 123.273ZM651.95 143.313H628.849V103.182H651.95C663.039 103.201 672.023 112.185 672.042 123.273C672.004 134.345 663.022 143.303 651.95 143.313ZM271.744 164.066C271.744 179.574 261.255 185.793 248.591 185.793C235.883 185.793 225.437 179.574 225.437 164.066V91.5874H213.843V164.162C213.843 184.645 228.012 197.352 248.591 197.352C269.213 197.352 283.347 184.645 283.347 164.162V91.5874H271.753L271.744 164.066ZM162.866 172.024L147.445 91.6396H133.354L117.942 172.024L103.451 91.6396H91.631L111.671 195.978H123.943L140.382 115.193L156.829 195.978H169.093L189.133 91.6396H177.313L162.866 172.024ZM559.171 241.746H524.51V346.084H536.113V305.109H559.171C576.639 305.099 590.799 290.944 590.813 273.475C590.859 265.061 587.544 256.976 581.602 251.018C575.66 245.06 567.585 241.722 559.171 241.746ZM559.171 293.471H536.113V253.392H559.171C564.501 253.388 569.614 255.503 573.383 259.272C577.152 263.04 579.267 268.154 579.263 273.484C579.224 284.547 570.234 293.49 559.171 293.471ZM853.164 91.5874L819.93 195.935H832.02L839.761 171.894H879.31L886.955 195.935H899.219L865.785 91.5874H853.164ZM843.397 160.335L859.566 110.079L875.561 160.335H843.397ZM753.27 240.328C734.595 240.357 719.478 255.513 719.497 274.188V313.65C719.478 332.325 734.595 347.482 753.27 347.511C771.963 347.486 787.111 332.343 787.14 313.65V274.188C787.115 255.494 771.964 240.347 753.27 240.328ZM775.493 313.65C775.504 319.547 773.167 325.207 768.997 329.377C764.827 333.547 759.167 335.884 753.27 335.873C747.373 335.884 741.714 333.547 737.544 329.377C733.373 325.207 731.036 319.547 731.048 313.65V274.188C731.048 261.838 741.006 251.887 753.27 251.887C765.534 251.887 775.493 261.846 775.493 274.188V313.65ZM374.613 172.024L327.375 91.6396H316.442V195.969H328.036V115.532L375.274 195.926H386.207V91.5874H374.613V172.024ZM988.258 91.6309V172.024L941.151 91.6396H930.131V195.969H941.681V115.532L988.971 195.926H1000V91.5874L988.258 91.6309ZM882.858 322.174L835.569 241.746H824.636V346.084H836.282V265.656L883.476 346.084H894.409V241.746H882.858V322.174ZM487.98 162.109V125.457C487.97 106.784 472.835 91.6492 454.163 91.6396H419.459V195.969H454.163C472.832 195.912 487.946 180.779 487.98 162.109ZM431.053 103.182H454.111C466.41 103.177 476.382 113.148 476.377 125.448V162.109C476.377 174.373 466.47 184.375 454.111 184.375H431.053V103.182ZM586.63 184.375H534.321V149.445H580.933V137.851H534.321V103.19H586.63V91.5961H522.736V195.935H586.638V184.375H586.63ZM753.27 143.139L727.316 91.6396H715.226V195.969H726.786V115.532L749.53 161.439H756.993L779.746 115.532V195.926H791.48V91.5874H779.39L753.27 143.139ZM97.3193 253.392H134.607V346.084H146.201V253.392H183.436V241.746H97.3193V253.392ZM271.336 288.131H225.829V241.746H214.235V346.084H225.829V299.69H271.292V346.084H282.938V241.746H271.292V288.131H271.336ZM659.413 288.227L642.8 281.651C631.597 276.937 630.084 271.692 630.084 267.074C630.084 262.812 631.693 259.254 634.798 256.671C638.529 253.575 644.313 251.783 650.889 251.783C657.638 251.783 663.335 253.653 667.067 256.845C670.52 259.872 672.303 264.142 672.303 269.561V271.431H683.949V269.561C683.949 251.435 670.441 240.232 650.889 240.232C631.423 240.232 618.455 251.261 618.455 266.978C618.455 280.929 628.318 288.575 640.399 293.202L655.151 299.064C669.459 304.587 673.642 308.666 673.642 317.208C673.642 322.8 671.677 327.245 667.945 330.446C663.953 333.899 657.638 335.864 650.532 335.864C643.07 335.864 636.755 334.081 632.667 330.707C629.023 327.68 627.153 323.418 627.153 318.182V315.598H615.506V318.182C615.506 336.221 629.823 347.502 650.524 347.502C671.137 347.502 685.184 335.595 685.184 317.208C685.193 299.421 671.503 293.028 659.413 288.227ZM453.71 293.202L427.669 241.746H415.623V346.084H427.217V265.656L450.014 311.597H457.442L480.239 265.656V346.084H491.833V241.746H479.804L453.71 293.202Z" fill="#fff"></path>
            </g>
            <defs>
              <clipPath id="clip0_3077_14635">
                <rect fill="white" height="347.511" width="1000"></rect>
              </clipPath>
            </defs>
          </svg>
        `,
      }}
    />
            <Typography
              variant="body2"
              sx={{ marginTop: '10px', fontFamily: 'Arial, sans-serif',fontSize:"13px", color: '#fff' }}

            >
         Daniel Lopes, Frontend Developer
            </Typography>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Framework;
