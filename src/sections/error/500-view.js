import Typography from "@mui/material/Typography";

export default function Error500View() {
  return (
    <div className="flex flex-col items-center justify-center rounded-md p-4 h-screen ">
      <div className="text-center">
        <Typography variant="h3" paragraph>
          500 Internal Server Error
        </Typography>
        <Typography>There was an error, please try again later.</Typography>
      </div>

      <a
        href="/"
        className="mt-4 px-6 py-3 bg-cyan-400 text-white rounded-md transition duration-300 hover:bg-cyan-500"
      >
        Back to Homepage
      </a>
    </div>
  );
}
