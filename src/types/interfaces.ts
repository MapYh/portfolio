interface Content {
  titel: string;
  pageDescription: string;
  titelMyInterest: string;
  myInterest: string;
  myInterest_cont: string;
  titelMyApproach: string;
  myApproach: string;
  titelBeyondCode: string;
  BeyondCode: string;
}
export interface HomePageContent {
  titel: string;
  pageDescription: string;
}

export interface MailToContent {
  mailto: string;
  label: string;
}

export interface Triangle_colors {
  classname: string;
  secondClassName: string;
}

export interface Triangle_colors_home {
  first_home_triangle: string;
  second_home_triangle: string;
}

export interface Triangle_colors_about {
  first_about_triangle: string;
  second_about_triangle: string;
}

export interface Triangle_colors_work {
  first_work_triangle: string;
  second_work_triangle: string;
}

export default Content;
