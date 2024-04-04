// Components
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Container from "@/components/layout/container";
import SearchSection from "@/components/layout/search-section";
import TopEmployerSection from "@/components/layout/top-employer-section";
import ArticleSection from "@/components/layout/article-section";
import TopSearchSection from "./components/layout/top-search-section";
import SearchSectionQuery from "./components/layout/search-section-query";
function App() {
    return (
        <>
            <Header />

            <SearchSectionQuery />
            <TopSearchSection />
            <ArticleSection />

            <Footer />
        </>
    );
}

export default App;
