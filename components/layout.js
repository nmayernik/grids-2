import Header from "./header";
import Footer from "./footer";


export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-1 py-6 md:py-12">
        {props.children}
      </main>

    </div>
  );
}
