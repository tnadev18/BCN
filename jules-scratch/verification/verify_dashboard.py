from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    ports = [5173, 5174, 5175, 5176, 5177]
    for port in ports:
        try:
            page.goto(f"http://localhost:{port}/")
            page.wait_for_selector("text=Dashboard", timeout=5000)
            page.screenshot(path="/app/jules-scratch/verification/dashboard.png")
            print(f"Successfully connected to port {port}")
            browser.close()
            return
        except Exception as e:
            print(f"Could not connect to port {port}: {e}")

    browser.close()
    raise Exception("Could not connect to any of the ports.")

with sync_playwright() as playwright:
    run(playwright)
