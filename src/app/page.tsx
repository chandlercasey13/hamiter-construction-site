export default function Home() {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <h1 className="text-4xl font-bold mb-4 text-center">Welcome to the Mobile Menu Demo</h1>
        <p className="text-xl text-center">
          On mobile, click the menu icon in the top right corner to open the mobile menu.
          <br />
          On desktop, the menu items are in the navbar.
        </p>
      </div>
    )
  }
  
  