import { fetchHeadlines } from '../services/reuters.service';
import { saveHeadlines } from '../services/headline.service';

export const getHeadline = async () => {
    let reutersHeadlines = await fetchHeadlines();
    saveHeadlines(reutersHeadlines);
}