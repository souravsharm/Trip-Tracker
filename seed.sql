-- DEMO VERSION: Top 50 Most Important Countries (Neon Free Tier Limit)
-- Curated selection of the world's most visited and important countries

INSERT INTO countries (country_code, country_name) VALUES ('US', 'United States of America');
INSERT INTO countries (country_code, country_name) VALUES ('GB', 'United Kingdom');
INSERT INTO countries (country_code, country_name) VALUES ('FR', 'France');
INSERT INTO countries (country_code, country_name) VALUES ('DE', 'Germany');
INSERT INTO countries (country_code, country_name) VALUES ('IT', 'Italy');
INSERT INTO countries (country_code, country_name) VALUES ('ES', 'Spain');
INSERT INTO countries (country_code, country_name) VALUES ('CA', 'Canada');
INSERT INTO countries (country_code, country_name) VALUES ('AU', 'Australia');
INSERT INTO countries (country_code, country_name) VALUES ('JP', 'Japan');
INSERT INTO countries (country_code, country_name) VALUES ('CN', 'China');
INSERT INTO countries (country_code, country_name) VALUES ('IN', 'India');
INSERT INTO countries (country_code, country_name) VALUES ('BR', 'Brazil');
INSERT INTO countries (country_code, country_name) VALUES ('MX', 'Mexico');
INSERT INTO countries (country_code, country_name) VALUES ('AR', 'Argentina');
INSERT INTO countries (country_code, country_name) VALUES ('CL', 'Chile');
INSERT INTO countries (country_code, country_name) VALUES ('PE', 'Peru');
INSERT INTO countries (country_code, country_name) VALUES ('CO', 'Colombia');
INSERT INTO countries (country_code, country_name) VALUES ('TH', 'Thailand');
INSERT INTO countries (country_code, country_name) VALUES ('VN', 'Viet Nam');
INSERT INTO countries (country_code, country_name) VALUES ('ID', 'Indonesia');
INSERT INTO countries (country_code, country_name) VALUES ('MY', 'Malaysia');
INSERT INTO countries (country_code, country_name) VALUES ('SG', 'Singapore');
INSERT INTO countries (country_code, country_name) VALUES ('KR', 'Korea (South)');
INSERT INTO countries (country_code, country_name) VALUES ('PH', 'Philippines');
INSERT INTO countries (country_code, country_name) VALUES ('TR', 'Turkey');
INSERT INTO countries (country_code, country_name) VALUES ('GR', 'Greece');
INSERT INTO countries (country_code, country_name) VALUES ('NL', 'Netherlands');
INSERT INTO countries (country_code, country_name) VALUES ('BE', 'Belgium');
INSERT INTO countries (country_code, country_name) VALUES ('CH', 'Switzerland');
INSERT INTO countries (country_code, country_name) VALUES ('AT', 'Austria');
INSERT INTO countries (country_code, country_name) VALUES ('PT', 'Portugal');
INSERT INTO countries (country_code, country_name) VALUES ('IE', 'Ireland');
INSERT INTO countries (country_code, country_name) VALUES ('SE', 'Sweden');
INSERT INTO countries (country_code, country_name) VALUES ('NO', 'Norway');
INSERT INTO countries (country_code, country_name) VALUES ('DK', 'Denmark');
INSERT INTO countries (country_code, country_name) VALUES ('FI', 'Finland');
INSERT INTO countries (country_code, country_name) VALUES ('PL', 'Poland');
INSERT INTO countries (country_code, country_name) VALUES ('CZ', 'Czech Republic');
INSERT INTO countries (country_code, country_name) VALUES ('HU', 'Hungary');
INSERT INTO countries (country_code, country_name) VALUES ('HR', 'Croatia');
INSERT INTO countries (country_code, country_name) VALUES ('MA', 'Morocco');
INSERT INTO countries (country_code, country_name) VALUES ('EG', 'Egypt');
INSERT INTO countries (country_code, country_name) VALUES ('ZA', 'South Africa');
INSERT INTO countries (country_code, country_name) VALUES ('KE', 'Kenya');
INSERT INTO countries (country_code, country_name) VALUES ('TZ', 'Tanzania, United Republic of');
INSERT INTO countries (country_code, country_name) VALUES ('AE', 'United Arab Emirates');
INSERT INTO countries (country_code, country_name) VALUES ('IL', 'Israel');
INSERT INTO countries (country_code, country_name) VALUES ('JO', 'Jordan');
INSERT INTO countries (country_code, country_name) VALUES ('SA', 'Saudi Arabia');
INSERT INTO countries (country_code, country_name) VALUES ('RU', 'Russian Federation');

-- DEMO DATA: Sample visited countries for demonstration
-- Angela's travels (user_id = 1, color = teal)
INSERT INTO visited_countries (country_code, user_id) VALUES ('FR', 1);  -- France - Paris, Eiffel Tower
INSERT INTO visited_countries (country_code, user_id) VALUES ('IT', 1);  -- Italy - Rome, Venice
INSERT INTO visited_countries (country_code, user_id) VALUES ('ES', 1);  -- Spain - Barcelona, Madrid
INSERT INTO visited_countries (country_code, user_id) VALUES ('GB', 1);  -- United Kingdom - London
INSERT INTO visited_countries (country_code, user_id) VALUES ('DE', 1);  -- Germany - Berlin, Munich
INSERT INTO visited_countries (country_code, user_id) VALUES ('NL', 1);  -- Netherlands - Amsterdam
INSERT INTO visited_countries (country_code, user_id) VALUES ('CH', 1);  -- Switzerland - Zurich
INSERT INTO visited_countries (country_code, user_id) VALUES ('AT', 1);  -- Austria - Vienna
INSERT INTO visited_countries (country_code, user_id) VALUES ('TH', 1);  -- Thailand - Bangkok
INSERT INTO visited_countries (country_code, user_id) VALUES ('JP', 1);  -- Japan - Tokyo
INSERT INTO visited_countries (country_code, user_id) VALUES ('US', 1);  -- United States - New York

-- Jack's travels (user_id = 2, color = powderblue)
INSERT INTO visited_countries (country_code, user_id) VALUES ('CA', 2);  -- Canada - Toronto
INSERT INTO visited_countries (country_code, user_id) VALUES ('US', 2);  -- United States - California
INSERT INTO visited_countries (country_code, user_id) VALUES ('AU', 2);  -- Australia - Sydney
INSERT INTO visited_countries (country_code, user_id) VALUES ('SG', 2);  -- Singapore - Marina Bay
INSERT INTO visited_countries (country_code, user_id) VALUES ('BR', 2);  -- Brazil - Rio
INSERT INTO visited_countries (country_code, user_id) VALUES ('MX', 2);  -- Mexico - Cancun
INSERT INTO visited_countries (country_code, user_id) VALUES ('AR', 2);  -- Argentina - Buenos Aires
INSERT INTO visited_countries (country_code, user_id) VALUES ('CL', 2);  -- Chile - Santiago