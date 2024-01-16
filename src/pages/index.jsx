import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

const About = () => {
    return (
        <div>
            <Typography variant="h3" textAlign="center" sx={{ marginBottom: 8 }}>
                Who we are
            </Typography>
            <Grid container spacing={8}>
                <Grid item xs={6}>
                    <Stack spacing={6}>
                        <Image
                            src={"/napoleon.jpg"}
                            width={300}
                            height={400}
                            alt="Napoleon"
                            style={{ borderRadius: "8px", margin: "auto" }}
                        />
                        <Typography variant="body1" align="center">
                            Είμαι ο Γαρτσώνης Ναπολέων και δουλεύω ως web developer. Η πρώτη μου δουλεία ήταν σε μια
                            startup στην Θεσσαλονίκη και εδώ κι έναν χρόνο βρίσκομαι στην Deloitte. Το tech-stack με το
                            οποίο δουλεύω είναι React/Next.js frontend και Node/NestJS backend με μεγαλύτερη έμφαση στο
                            react κομμάτι. Στο project στο οποίο βρίσκομαι τώρα, ασχολούμαι κυρίως με performance
                            optimizations και bugfixing. Τα πιο σημαντικά πράγματα στον προγραμματισμό κατά την άποψη
                            μου είναι ο καθαρός κώδικας και να γνωρίζουμε/ακολουθούμε τα best practices.
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs={6}>
                    <Stack spacing={6}>
                        <Image
                            src={"/fotis.jpg"}
                            width={300}
                            height={400}
                            alt="fotis"
                            style={{ borderRadius: "8px", margin: "auto" }}
                        />
                        <Typography variant="body1" align="center">
                            Ονομάζομαι Φώτης Μαλάκης και εργάζομαι ως Web Developer στο τμήμα του Experience Management
                            & Marketing της DACC εδώ και σχεδόν δύο χρόνια. Στο portfolio μου συμπεριλαμβάνεται εμπειρία
                            πάνω στα μεγάλα front-end frameworks του πεδίου (Angular 2+, React, Vue) με εμπειρία στην
                            εφαρμογή τους σε μεγάλη κλίμακα, όπως για παράδειγμα στο σύστημα ηλεκτρονικής γραμματείας
                            του ΑΠΘ (UniverSIS) καθώς και σε ιστοσελίδες ή/και εφαρμογές για εταιρίες όπως η Maserati, η
                            illy και η Novartis. Έχω επίσης εμπειρία σε Progressive Web Application frameworks (Ionic)
                            καθώς και σε Node, Java και Python για το back-end ή/και αυτοματισμούς. Στον ελεύθερο μου
                            χρόνο, ασχολούμαι τακτικά με το gaming και anime/manga.
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>
        </div>
    );
};

export default About;
