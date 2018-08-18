#include <opencv2/imgproc.hpp>
#include <opencv2/highgui.hpp>

#include "color_cycle.h"
#include <iostream>

using namespace cv;

namespace color_cycle
{
   void rotate_hue()
   {
      Mat img = imread("lol16.jpg");  
      Rect r(250, 250, 120, 200);
      rectangle(img, r, Scalar(0, 255, 255), 3);

      imshow("画矩形", img);

      waitKey();
   }

}