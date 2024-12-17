/** @format */
import { createBrowserRouter, RouterProvider } from "react-router";
import { CreateNote, Home, Notes } from "./pages";
import MainLayout from "./components/custom/mainLayout";
import { ThemeProvider } from "./components/custom/themeProvider";
import { Toaster } from "./components/ui/sonner";

const App = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<MainLayout>
					<Home />
				</MainLayout>
			),
		},
		{
			path: "/notes",
			element: (
				<MainLayout>
					<Notes />
				</MainLayout>
			),
		},
		{
			path: "/notes/create",
			element: (
				<MainLayout>
					<CreateNote />
				</MainLayout>
			),
		},
	]);
	return (
		<ThemeProvider
			defaultTheme='system'
			storageKey='theme'>
			<RouterProvider router={router}></RouterProvider>
			<Toaster position='top-center' />
		</ThemeProvider>
	);
};

export default App;
