export interface Project {
  name: string;
  description: string;
}

export interface Pagination {
  page: number;
  limit: number;
}

export interface Filter {
  name?: string;
}

export interface ProjectSearchOptions {
  pagination: Pagination;
  filter: Filter;
}

export const getProjects = (
  options: ProjectSearchOptions
): Promise<Project[]> => {
  return Promise.resolve([
    {
      name: 'Project 1',
      description: 'Description 1',
    },
    {
      name: 'Project 2',
      description: 'Description 2',
    },
  ]);
};
