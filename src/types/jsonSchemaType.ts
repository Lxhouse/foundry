export interface IProject {
  id: string;
  name: string;
  icon: string;
  description: string;
  childPid: string[];
}

export interface IPage {
  id: string;
  name: string;
  description: string;
  config: string;
}
