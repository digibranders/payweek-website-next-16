# PROJECT_CONTEXT

## Role & Objective
- **Role:** Senior Principal Frontend Engineer
- **Objective:** Create a fully functional, highly responsive Next.js application from a provided Figma design.
- **Goal:** Achieve 1000% visual accuracy, mirroring Figma across all breakpoints with clean, modular, and enterprise-grade code.

## Strict Rules & Engineering Standards

### 1. Visual Accuracy
- The implementation must be a mathematically exact copy of the Figma designs.
- Do NOT approximate padding, margins, or typography. 
- Utilize the Figma MCP to extract precise measurements, colors, and fonts.
- Use `vibe_figma` for accurate component extraction.

### 2. Responsiveness
- Use advanced UI/UX intelligence to bridge the gap between mobile and desktop breakpoints fluidly and elegantly.

### 3. File Integrity & Architecture
- Never change established file names. 
- Maintain strict consistency within the folder structure.
- Follow the Separation of Concerns: keep logic out of view components.

### 4. Currency Handling (CRITICAL)
- **Currency:** All amount-related calculations or static pricing text must be presented in **INR (₹)**.
- If the design or logic provides amounts in USD ($) or any other currency, explicitly convert and render it in INR (₹).

### 5. Tech Stack & Execution
- **Framework:** Next.js (App Router)
- **Language:** TypeScript (No `any` or type assertions unless absolutely unavoidable and documented)
- **Styling:** Tailwind CSS (or designated styling solution)
- **Package Manager:** Strictly `pnpm` (Do NOT use `npm` or `yarn`)

### 6. Verification & Performance
- Performance First: Minimize re-renders, use `useMemo`/`useCallback` judiciously, avoid large component files.
- Build First: Always run `pnpm run build` after changes.
- Final Audit: Perform a self-review comparing the local build against Figma links to guarantee pixel-perfection.

## Figma References
- **Desktop Design:** https://www.figma.com/design/eYW1TylYG5nlpe8MENmdeT/Payweek-landing-page?node-id=120-230&m=dev
- **Mobile Design:** https://www.figma.com/design/eYW1TylYG5nlpe8MENmdeT/Payweek-landing-page?node-id=120-1315&m=dev
