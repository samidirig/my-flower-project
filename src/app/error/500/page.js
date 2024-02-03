import Error500View from "@/sections/error/500-view";

// ----------------------------------------------------------------------

export const metadata = {
  title: '500 Internal Server Error',
};

export default function Page500() {
  return <Error500View />;
}
