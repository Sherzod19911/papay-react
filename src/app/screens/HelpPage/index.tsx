// 
import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Tab from "@mui/material/Tab";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "../../../css/help.css";



export function HelpPage() {
     //INITIALIZIATION
     const [value, setValue] = React.useState("1"); 
    const faq = [
        {
            question: "To'lov qanday amaga oshiriladi",
            answer: "To'lovni paynet yoki click bn amalga oshiradi"
        },
        {
            question: "Buyurtma qancha vaqtda yetib keladi",
            answer: "Buyurtma harid qilgan narsalarga bogliq"
        },
        {
            question: "sayitdan foydalanishda malumotlarni havfsizligiga kim javob beradi",
            answer: "albatta bizni dasturchiarimiz sizni malumotlaingizni saqloshga yordam beradi"
        },
        {
            question: "Sayitda muommo bulsa kimga murojat qilamam",
            answer: "hurmatli mijoz albatta adminga xat yozib muommoni hal qilamiz"
        },
        {
            question: "Men foyda lanuvchi emas biznesman sifatida harakat qilsam kimga murojat qilishim kerak",
            answer: "Hurmatli mijioz siz sayitda kursatilgan telga murojat qillishingiz mumkin"
        },
        {
            question: "men koreydaman uzbekiston kartalariga pu junata ololamanmi",
            answer: "Albatta siz hozirgi kunda bunday ishlarni amalga oshirish oodiy ish buib oldi"
        },
        {
            question: "tulovni qachongaca qilishim kerak",
            answer: "To'lovni paynet yoki click bn amalga oshiradi"
        },
        {
            question: "dars davomida nimalarga etibor berish kerak",
            answer: "Bizda birinchi urinda tartib intizom"
        },
        
    ];   
    const rules = [
        `Saytdan to'laqonli yani buyurtmalar qilish, jonli
        muloqotlardan foydalanishingiz uchun ro'yxatdan
        o'tishingiz shart.`,
        `Buyurtmalaringizga to'lovni amalga oshirganingizdan so'ng
        bekor qilishning imkoni yo'q shu sababli to'lovlarni
        amalga oshirishdan avval tekshirib oling.`,
        `Jonli muloqot vaqtida bexayo so'zlarni ishlatish mutlaqo
        taqiqlanadi.`,
        `Shaxsiy reklamalarni adminning ruxsatisiz yozish va
        tarqatish mumkun emas.`,
        `Maqolalaringiz odob doirasidan chiqib ketmasligi shart.`,
        `Barcha xarakatlaringiz adminlarimiz nazorati ostida
        bo'lani sabab iltimos talablarimizni xurmat qiling.`,
      ];
     // HANDLERS
     const handleChange = (event: any, newValue: string) => {
        setValue(newValue);
      };
    return (
      <div className="help_page">
         <Container maxWidth="lg" sx={{ mt: "50px", mb: "50px" }}>
         <TabContext value={value}>
         <Box className={"help_menu"}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
             
                onChange={handleChange}
                aria-label="lab API tabs example"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Tab label="Qoidalar" value={"1"} />
                <Tab label="FAQ" value={"2"} />
                <Tab label="Adminga xat" value={"3"} />
              </TabList>
            </Box>
          </Box>
          <Stack>
            <Stack className={"help_main_content"}>
              <TabPanel value={"1"}>
                <Stack className={"theRules_box"}>
                  <Box className={"theRulesFrame"}>
                    {rules.map((ele, member) => {
                      return <p>{ele}</p>;
                    })}
                  </Box>
                </Stack>
              </TabPanel>
              <TabPanel value={"2"}>
                <Stack className={"accordian_menu"}>
                  {faq.map((ele, member) => {
                    return (
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography>{ele.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>{ele.answer}</Typography>
                        </AccordionDetails>
                      </Accordion>
                    );
                  })}
                </Stack>
              </TabPanel>
              <TabPanel value={"3"}>
                <Stack className={"admin_letter_box"}>
                  <Stack className={"admin_letter_container"}>
                    <Box className={"admin_letter_frame"}>
                      <span>Adminga Xabar Qoldirish</span>
                      <p>
                        Assalomu alaykum! Adminga xabar qoldirish uchun pasdagi
                        formlarni to’ldiring!{" "}
                      </p>
                    </Box>
                    <form
                      action={"#"}
                      method={"POST"}
                      className={"admin_letter_frame"}
                    >
                      <div className={"admin_input_box"}>
                        <label>Ism</label>
                        <input
                          type={"text"}
                          name={"mb_nick"}
                          placeholder={"Ism"}
                        />
                      </div>
                      <div className={"admin_input_box"}>
                        <label>Elektron Manzil</label>
                        <input
                          type={"text"}
                          name={"mb_email"}
                          placeholder={"Elektron Manzil"}
                        />
                      </div>
                      <div className={"admin_input_box"}>
                        <label>Xabar</label>
                        <textarea
                          name={"mb_msg"}
                          placeholder={"Xabar"}
                        ></textarea>
                      </div>
                      <Box
                        display={"flex"}
                        justifyContent={"flex-end"}
                        sx={{ mt: "30px" }}
                      >
                        <Button type={"submit"} variant="contained">
                          Jo'natish
                        </Button>
                      </Box>
                    </form>
                  </Stack>
                </Stack>
              </TabPanel>
            </Stack>
          </Stack>
        </TabContext>
      </Container>
    </div>
  );
}

