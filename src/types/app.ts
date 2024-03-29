import { ReactNode } from "react";
import { RouteProps } from "react-router-dom";

export type AppPath = `/${string}`;

export type AppRoute = {
  path: AppPath;
  element: ReactNode;
  props?: RouteProps;
};

export type MeetupResponse = {
  data: MeetupEvent[];
};

export type MeetupEvent = {
  id: string;
  attributes: {
    name: string;
    description: string;
    date: string;
    time: string;
    venue: string;
    photo: {
      data: {
        attributes: {
          formats: {
            large: {
              url: string;
            };
          };
        };
      }[];
    };
  };
};

export type SponsorResponse = {
  data: Sponsor[];
};

export type Sponsor = {
  id: string;
  attributes: {
    name: string;
    description: string;
    logo: {
      data: {
        attributes: {
          url: string;
        };
      };
    }[];
  };
};

export type PhotoReponse = {
  data: Photo[];
};

export type Photo = {
  id: string;
  attributes: {
    title: string;
    description: string;
    media: {
      data: [
        {
          attributes: {
            url: string;
          };
        }
      ];
    };
  };
};

export type AppRoutes = Array<AppRoute>;
