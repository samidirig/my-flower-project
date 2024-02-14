import Typography from "@mui/material/Typography";

export default function NotFoundView() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center">
        <Typography variant="h3" paragraph>
          Page Not Found!
        </Typography>
        <Typography>
          Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
          mistyped the URL? Be sure to check your spelling.
        </Typography>
      </div>

      <a
        href="/"
        // style={{backgroundColor:'#a83420'}}
        className="mt-4 px-6 py-3 bg-cyan-400 text-white rounded-md transition duration-300 hover:bg-cyan-500"
      >
        Back to Homepage
      </a>
    </div>
  );
}
