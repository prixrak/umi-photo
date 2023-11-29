export const getBreakpoints = (): {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
} => {
  const isDesktop = window.innerWidth > 1200;
  const isTablet = window.innerWidth <= 1200;
  const isMobile = window.innerWidth <= 600;

  return { isMobile, isTablet, isDesktop };
};

export const convertFileToString = (file: Blob): Promise<string> =>
  new Promise((resolve) => {
    const fileReader = new FileReader();
    fileReader.onload = () => resolve(fileReader.result as string);
    fileReader.readAsDataURL(file);
  });
