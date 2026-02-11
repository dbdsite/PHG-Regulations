// ========== CONFIGURATION ==========
        const CONFIG = {
            SHEET_ID: '2imBaDAQ2iFkj5l61UxkYD8AFbreW5IrRSOn36KtdzKE0',
            // Для TXT файлов используйте относительные пути
            TXT_FILES: {
                participants: 'participants.txt',
                bracket: 'bracket.txt',
                config: 'config.txt'
            },
        };

// ========== KILLERS DATA ==========
const KILLERS = [
    { id: 'trapper', name: 'Trapper', nameRu: 'Траппер', img: 'https://i.imgur.com/CTaZlmF.png' },
    { id: 'wraith', name: 'Wraith', nameRu: 'Призрак', img: 'images/killers/wraith.webp' },
    { id: 'hillbilly', name: 'Hillbilly', nameRu: 'Хиллбилли', img: 'https://i.imgur.com/jt3BATY.png' },
    { id: 'nurse', name: 'Nurse', nameRu: 'Медсестра', img: 'images/killers/nurse.webp' },
    { id: 'doctor', name: 'Doctor', nameRu: 'Доктор', img: 'https://i.imgur.com/D0I6Evw.png' },
    { id: 'huntress', name: 'Huntress', nameRu: 'Охотница', img: 'https://i.imgur.com/A78f8s3.png' },
    { id: 'cannibal', name: 'Cannibal', nameRu: 'Каннибал', img: 'https://i.imgur.com/AkoIvGj.png' },
    { id: 'nightmare', name: 'Nightmare', nameRu: 'Кошмар', img: 'https://i.imgur.com/TN8H6Pz.png' },
    { id: 'pig', name: 'Pig', nameRu: 'Свинья', img: 'images/killers/pig.webp' },
    { id: 'clown', name: 'Clown', nameRu: 'Клоун', img: 'https://i.imgur.com/LXiDR6s.png' },
    { id: 'spirit', name: 'Spirit', nameRu: 'Дух', img: 'https://i.imgur.com/lUoZ7EB.png' },
    { id: 'demogorgon', name: 'Demogorgon', nameRu: 'Демогоргон', img: 'https://i.imgur.com/wdUH3jL.png' },
    { id: 'oni', name: 'Oni', nameRu: 'Они', img: 'https://i.imgur.com/SftFGjd.png' },
    { id: 'deathslinger', name: 'Deathslinger', nameRu: 'Стрелок', img: 'images/killers/deathslinger.webp' },
    { id: 'executioner', name: 'Executioner', nameRu: 'Палач', img: 'https://i.imgur.com/kckCdKs.png' },
    { id: 'blight', name: 'Blight', nameRu: 'Мор', img: 'https://i.imgur.com/3srhPN0.png' },
    { id: 'nemesis', name: 'Nemesis', nameRu: 'Немезис', img: 'images/killers/nemesis.webp' },
    { id: 'cenobite', name: 'Cenobite', nameRu: 'Сенобит', img: 'https://i.imgur.com/a4Or0gU.png' },
    { id: 'artist', name: 'Artist', nameRu: 'Художница', img: 'https://i.imgur.com/EeeY3dH.png' },
    { id: 'mastermind', name: 'Mastermind', nameRu: 'Вескер', img: 'https://i.imgur.com/vqxhzH3.png' },
    { id: 'houndmaster', name: 'Houndmaster', nameRu: 'Егерь', img: 'https://i.imgur.com/9vAwJB1.png' },
    { id: 'unknown', name: 'Unknown', nameRu: 'Неводомое', img: 'https://i.imgur.com/nGFqWMk.png' }
];

// ========== TRANSLATIONS ==========
const TRANSLATIONS = {
    ru: {
        loading: 'ИНИЦИАЛИЗАЦИЯ СИСТЕМЫ...',
        devtools_warning: '🚫 Консоль разработчика запрещена!',
        devtools_close: 'Закройте консоль для продолжения',
        place_1: '1-е МЕСТО',
        place_2: '2-е МЕСТО',
        place_3: '3-е МЕСТО',
        nav_registration1: 'Рега в Discord',
        nav_registration2: 'Рега в Telegram',
        nav_info: 'Информация о турнире',
        nav_participants: 'Участники',
        nav_balance: 'Баланс турнира',
        nav_bracket: 'Сетка турнира',
        back: 'Назад',
        section_registration: 'Регистрация на турнир',
        section_info: 'Информация о турнире',
        section_participants: 'Участники турнира',
        section_balance: 'Баланс турнира',
        section_bracket: 'Сетка турнира',
        form_nickname: 'Никнейм',
        form_twitch: 'Ссылка на Twitch',
        form_discord: 'Никнейм Discord',
        form_steam: 'Ссылка Steam или Код дружбы',
        form_killer: 'Выберите киллера для 1 Этапа',
        form_hours: 'Количество наигранных часов',
        form_additional: 'Дополнительная информация',
        form_submit: 'Отправить заявку',
        info_about: 'О турнире',
        info_about_text: 'PHG League - это соревновательный турнир формата 1v1 по игре Dead by Daylight. Турнир проводится среди лучших игроков за киллеров. Призовой фонд составляет $125.',
        info_requirements: 'Требования для участия',
        req_1: 'Минимум 500 часов в Dead by Daylight',
        req_2: 'Наличие аккаунта Twitch для трансляции матчей',
        req_3: 'Наличие Discord для связи с организаторами',
        req_4: 'Стабильное интернет-соединение',
        req_5: 'Возможность записи/трансляции игр',
        info_format: 'Формат турнира',
        info_format_text: 'Турнир проводится в формате Single Elimination (на вылет). 16 пар участников соревнуются в трех этапах. В первом этапе 16 пар, во втором - 8 пар, в третьем - 4 пары. Победители определяются по результатам матчей.',
        info_banned: 'Запрещённые действия',
        ban_1: 'Использование сторонних программ (читы, макросы)',
        ban_2: 'Эксплойты и баги игры',
        ban_3: 'Оскорбления и токсичное поведение',
        ban_4: 'Стриминг с задержкой менее 2 минут',
        ban_5: 'Сговор с противником',
        info_tech: 'Технические проблемы',
        info_tech_text: 'В случае технических проблем (вылет игры, проблемы с интернетом) матч может быть переигран по решению судей. Участник должен сообщить о проблеме в течение 5 минут. Максимум 2 переигровки на турнир для одного участника.',
        info_schedule: 'Расписание',
        schedule_1: 'Регистрация: до 14.02.2026 14:00 МСК',
        schedule_2: 'Первый этап: 14.02.2026 18:30 МСК',
        schedule_3: 'Второй этап: 15.02.2026 18:30 МСК',
        schedule_4: 'Финал: 15.02.2026 18:30 МСК',
        info_check: 'Проверки при подозрениях',
        info_check_text: 'При подозрении на использование запрещённого ПО судьи имеют право запросить: демонстрацию рабочего стола через Discord, проверку запущенных программ, записи матчей для анализа. Отказ от проверки = дисквалификация.',
        info_warning: '⚠️ ВНИМАНИЕ',
        info_warning_text: 'Несоблюдение правил турнира ведёт к немедленной дисквалификации без права на апелляцию. Нарушители будут забанены в будущих турнирах PHG League. Организаторы оставляют за собой право на окончательное решение в спорных ситуациях.',
        stage_1: 'ЭТАП 1 - Отборочные',
        stage_2: 'ЭТАП 2 - Полуфинал',
        stage_3: 'ЭТАП 3 - Финал',
        allowed_killers1: 'Пул Киллеров (зеркало запрещено):',
        allowed_killers2: 'Пул Киллеров (с зеркалом):',
        allowed_maps: 'Разрешённые Карты:',
        allowed_perks: 'Разрешённые Перки:',
        tournament_rules: 'Правила проведения турнира',
        rule_allowed_1: 'Разрешено использовать хлоушку или ключ',
        rule_allowed_2: 'Выживший выбирает сторону Лачуги',
        rule_allowed_3: 'У выжившего 2 перка из разрешённых, у киллера 1',
        rule_forbidden_1: 'Останые предметы запрещены',
        rule_forbidden_2: 'Все что не прописано = запрещено',
        rule_forbidden_3: 'В случае спорных моментов организатор может изменить определенные правила',
        rule_forbidden_4: 'Запрещено использование багов и эксплойтов',
        rule_forbidden_5: 'Адоны на ауры (в т.ч. на ключ) запрещены',
        rule_forbidden_6: 'В случае спорных моментов организатор может изменить определенные правила',
        rule_forbidden_7: 'Запрещены перки вне списка разрешённых (для соответствующих этапов)',
        round_1: 'РАУНД 1 (16 пар)',
        round_2: 'РАУНД 2 (8 пар)',
        round_3: 'РАУНД 3 (4 пары)',
        finals: 'ФИНАЛИСТЫ',
        footer_rights: 'Все права защищены.',
        already_registered: 'Вы уже зарегистрированы на турнир!',
        registration_success: 'Заявка успешно отправлена!',
        registration_error: 'Ошибка отправки. Попробуйте позже.',
        select_killer: 'Пожалуйста, выберите киллера',
        no_participants: 'Участники пока не зарегистрированы',
        status_confirmed: 'Подтверждён',
        status_pending: 'Ожидает',
        status_rejected: 'Отказано'
    },
    en: {
        loading: 'INITIALIZING SYSTEM...',
        devtools_warning: '🚫 Developer console is prohibited!',
        devtools_close: 'Close the console to continue',
        place_1: '1st PLACE',
        place_2: '2nd PLACE',
        place_3: '3rd PLACE',
        nav_registration1: 'Reg in Discord',
        nav_registration2: 'Reg in Telegram',
        nav_info: 'Tour Info',
        nav_participants: 'Participants',
        nav_balance: 'Tour Balance',
        nav_bracket: 'Tour Bracket',
        back: 'Back',
        section_registration: 'Tournament Registration',
        section_info: 'Tournament Information',
        section_participants: 'Tournament Participants',
        section_balance: 'Tournament Balance',
        section_bracket: 'Tournament Bracket',
        form_nickname: 'Nickname',
        form_twitch: 'Twitch Link',
        form_discord: 'Discord Username',
        form_steam: 'Steam Link or Friend Code',
        form_killer: 'Select Killer',
        form_hours: 'Hours Played',
        form_additional: 'Additional Information',
        form_submit: 'Submit Application',
        info_about: 'About Tournament',
        info_about_text: 'PHG League is a competitive 1v1 tournament for Dead by Daylight. The tournament is held among the best killer players. Prize pool is $125.',
        info_requirements: 'Participation Requirements',
        req_1: 'Minimum 500 hours in Dead by Daylight',
        req_2: 'Twitch account for streaming matches',
        req_3: 'Discord for communication with organizers',
        req_4: 'Stable internet connection',
        req_5: 'Ability to record/stream games',
        info_format: 'Tournament Format',
        info_format_text: 'Tournament is held in Single Elimination format. 16 pairs of participants compete in three stages. First stage - 16 pairs, second - 8 pairs, third - 4 pairs. Winners are determined by match results.',
        info_banned: 'Prohibited Actions',
        ban_1: 'Using third-party software (cheats, macros)',
        ban_2: 'Game exploits and bugs',
        ban_3: 'Insults and toxic behavior',
        ban_4: 'Streaming with less than 2 minutes delay',
        ban_5: 'Collusion with opponent',
        info_tech: 'Technical Issues',
        info_tech_text: 'In case of technical problems (game crash, internet issues) the match may be replayed by judges decision. Participant must report the problem within 5 minutes. Maximum 2 replays per tournament for one participant.',
        info_schedule: 'Schedule',
        schedule_1: 'Registration: until 14.02.2026 14:00 МСК',
        schedule_2: 'First stage: 14.02.2026 18:30 МСК',
        schedule_3: 'Second stage: 15.02.2026 18:30 МСК',
        schedule_4: 'Finals: 15.02.2026 18:30 МСК',
        info_check: 'Suspicion Checks',
        info_check_text: 'If suspected of using prohibited software, judges may request: desktop demonstration via Discord, running programs check, match recordings for analysis. Refusal to check = disqualification.',
        info_warning: '⚠️ WARNING',
        info_warning_text: 'Non-compliance with tournament rules leads to immediate disqualification without the right to appeal. Violators will be banned from future PHG League tournaments. Organizers reserve the right to make final decisions in disputed situations.',
        stage_1: 'STAGE 1 - Qualifiers',
        stage_2: 'STAGE 2 - Semifinals',
        stage_3: 'STAGE 3 - Finals',
        allowed_killers: 'Allowed Killers:',
        allowed_maps: 'Allowed Maps:',
        allowed_perks: 'Allowed Perks:',
        tournament_rules: 'Tournament Rules',
        rule_allowed_1: 'Allowed to use any addons for selected killer',
        rule_allowed_2: 'Allowed to use any offerings (except maps)',
        rule_allowed_3: 'All game mechanics allowed (slug, camp, tunnel within rules)',
        rule_forbidden_1: 'Map offerings outside the allowed list are prohibited',
        rule_forbidden_2: 'Using bugs and exploits is prohibited',
        rule_forbidden_3: 'Perks outside the allowed list are prohibited (for corresponding stages)',
        round_1: 'ROUND 1 (16 pairs)',
        round_2: 'ROUND 2 (8 pairs)',
        round_3: 'ROUND 3 (4 pairs)',
        finals: 'FINALISTS',
        footer_rights: 'All rights reserved.',
        already_registered: 'You are already registered for the tournament!',
        registration_success: 'Application successfully submitted!',
        registration_error: 'Submission error. Please try again later.',
        select_killer: 'Please select a killer',
        no_participants: 'No participants registered yet',
        status_confirmed: 'Confirmed',
        status_pending: 'Pending',
        status_rejected: 'Rejected'
    }
};

// ========== STATE ==========
let currentLang = localStorage.getItem('phg_lang') || 'ru';
let telegramConfig = { botToken: '', chatId: '' };

// ========== LOAD PARTICIPANTS FROM TXT ==========
async function loadParticipants() {
    const grid = document.getElementById('participantsGrid');
    
    grid.innerHTML = `
        <div class="loading-spinner">
            <div class="spinner"></div>
        </div>
    `;

    try {
        // Добавляем timestamp для обхода кэша
        const timestamp = new Date().getTime();
        const response = await fetch(`${CONFIG.TXT_FILES.participants}?t=${timestamp}`);
        
        if (!response.ok) {
            throw new Error(`TXT file not found: ${response.status} ${response.statusText}`);
        }
        
        const text = await response.text();
        const lines = text.split('\n').filter(line => line.trim() !== '');
        
        console.log('Loaded participants:', lines.length);
        
        if (lines.length === 0) {
            grid.innerHTML = `
                <div class="no-participants">
                    <i class="fas fa-users-slash" style="font-size: 3rem; margin-bottom: 20px;"></i>
                    <p data-translate="no_participants">${TRANSLATIONS[currentLang].no_participants}</p>
                </div>
            `;
            return;
        }

        grid.innerHTML = '';
        
        // Формат TXT файла (CSV-like):
        // nickname,killer,hours,twitch,discord,status
        // Пример: Player1,huntress,500,https://twitch.tv/player1,player1#1234,confirmed
        
        lines.forEach((line, index) => {
            const values = line.split(',').map(v => v.trim());
            
            // Проверяем корректность строки
            if (values.length < 6) {
                console.warn('Invalid participant line:', line);
                return;
            }
            
            const [nickname, killer, hours, twitch, discord, status] = values;
            
            const killerData = KILLERS.find(k => k.id === killer) || { name: killer, nameRu: killer };
            const killerName = currentLang === 'ru' ? killerData.nameRu : killerData.name;
            
            const statusClass = status === 'confirmed' ? 'status-confirmed' : 
                               status === 'rejected' ? 'status-rejected' : 'status-pending';
            const statusText = TRANSLATIONS[currentLang][`status_${status}`] || status;

            const card = document.createElement('div');
            card.className = 'participant-card';
            card.innerHTML = `
                <span class="participant-number">#${index + 1}</span>
                <h3 class="participant-name">${nickname}</h3>
                <div class="participant-info">
                    <div class="participant-detail">
                        <i class="fas fa-skull"></i>
                        <span>${killerName}</span>
                    </div>
                    <div class="participant-detail">
                        <i class="fas fa-clock"></i>
                        <span>${hours} ${currentLang === 'ru' ? 'часов' : 'hours'}</span>
                    </div>
                </div>
                <div class="participant-contacts">
                    <a href="${twitch}" target="_blank" class="contact-btn">
                        <i class="fab fa-twitch"></i> Twitch
                    </a>
                    <button class="contact-btn" onclick="copyToClipboard('${discord}')">
                        <i class="fab fa-discord"></i> ${discord}
                    </button>
                </div>
                <div class="participant-status ${statusClass}">${statusText}</div>
            `;
            
            grid.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading participants:', error);
        grid.innerHTML = `
            <div class="no-participants">
                <i class="fas fa-exclamation-triangle" style="font-size: 3rem; margin-bottom: 20px; color: var(--primary-red);"></i>
                <p>Ошибка загрузки данных участников</p>
                <p style="font-size: 0.8rem; margin-top: 10px;">${error.message}</p>
                <p style="font-size: 0.8rem; margin-top: 10px;">Проверьте наличие файла: ${CONFIG.TXT_FILES.participants}</p>
            </div>
        `;
    }
}

// Функция для копирования в буфер обмена
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Discord скопирован в буфер обмена', 'success');
    });
}

// ========== LOAD BRACKET FROM TXT ==========
async function loadBracketData() {
    try {
        const timestamp = new Date().getTime();
        const response = await fetch(`${CONFIG.TXT_FILES.bracket}?t=${timestamp}`);
        
        if (!response.ok) {
            console.log('Bracket TXT file not found');
            return;
        }
        
        const text = await response.text();
        console.log('Bracket text loaded:', text.length, 'chars');
        
        // Разделяем по секциям (пустые строки или заголовки в квадратных скобках)
        const sections = text.split(/\n\n|\[/).filter(section => section.trim() !== '');
        
        console.log('Bracket sections found:', sections.length);
        
        // Формат TXT файла:
        // [Раунд 1]
        // Player1 vs Player2:2-1
        // Player3 vs Player4:0-2
        // 
        // [Раунд 2]
        // Player2 vs Player5:2-0
        // ...
        // 
        // [Победители]
        // 1:Player2
        // 2:Player5
        // 3:Player3
        
        let currentRound = '';
        
        sections.forEach(section => {
            const lines = section.split('\n').filter(line => line.trim() !== '');
            if (lines.length === 0) return;
            
            const firstLine = lines[0].trim();
            
            console.log('Processing section:', firstLine);
            
            if (firstLine.includes('Раунд 1') || firstLine.includes('Round 1')) {
                currentRound = 'round1';
                updateRoundMatches(currentRound, lines.slice(1));
            } else if (firstLine.includes('Раунд 2') || firstLine.includes('Round 2')) {
                currentRound = 'round2';
                updateRoundMatches(currentRound, lines.slice(1));
            } else if (firstLine.includes('Раунд 3') || firstLine.includes('Round 3')) {
                currentRound = 'round3';
                updateRoundMatches(currentRound, lines.slice(1));
            } else if (firstLine.includes('Победители') || firstLine.includes('Winners')) {
                updateWinners(lines.slice(1));
            } else if (firstLine.includes(']')) {
                // Это может быть строка типа "[Раунд 1]"
                const roundName = firstLine.replace(']', '').trim();
                if (roundName.includes('1')) {
                    currentRound = 'round1';
                    updateRoundMatches(currentRound, lines.slice(1));
                } else if (roundName.includes('2')) {
                    currentRound = 'round2';
                    updateRoundMatches(currentRound, lines.slice(1));
                } else if (roundName.includes('3')) {
                    currentRound = 'round3';
                    updateRoundMatches(currentRound, lines.slice(1));
                } else if (roundName.includes('Победители') || roundName.includes('Winners')) {
                    updateWinners(lines.slice(1));
                }
            } else if (lines.some(line => line.includes('vs'))) {
                // Если нет заголовков, но есть матчи
                if (currentRound) {
                    updateRoundMatches(currentRound, lines);
                } else {
                    // Предполагаем что это раунд 1
                    updateRoundMatches('round1', lines);
                }
            }
        });
    } catch (error) {
        console.error('Error loading bracket:', error);
    }
}

function updateRoundMatches(roundId, matchLines) {
    const container = document.getElementById(roundId);
    if (!container) {
        console.log('Container not found:', roundId);
        return;
    }
    
    console.log(`Updating ${roundId} with ${matchLines.length} matches`);
    
    // Очищаем существующие матчи
    container.innerHTML = '';
    
    matchLines.forEach((line, index) => {
        if (!line.includes('vs') && !line.includes(':')) return;
        
        let playersPart = line;
        let scorePart = '-:-';
        
        if (line.includes(':')) {
            const parts = line.split(':');
            playersPart = parts[0].trim();
            scorePart = parts[1] ? parts[1].trim() : '-:-';
        }
        
        const players = playersPart.split('vs').map(p => p.trim());
        const scores = scorePart.split('-').map(s => s.trim());
        
        // Если только один игрок (например, в финалах)
        if (players.length === 1) {
            players.push('TBD');
        }
        
        const match = document.createElement('div');
        match.className = 'bracket-match';
        match.innerHTML = `
            <div class="match-player ${scores[0] > scores[1] ? 'winner' : ''}">
                <span class="player-name">${players[0] || 'TBD'}</span>
                <span class="player-score">${scores[0] || '-'}</span>
            </div>
            <div class="match-player ${scores[1] > scores[0] ? 'winner' : ''}">
                <span class="player-name">${players[1] || 'TBD'}</span>
                <span class="player-score">${scores[1] || '-'}</span>
            </div>
        `;
        
        container.appendChild(match);
    });
    
    // Если нет матчей, создаем пустые
    if (container.children.length === 0) {
        console.log('No matches found, creating empty ones');
        const count = roundId === 'round1' ? 16 : 
                     roundId === 'round2' ? 8 : 
                     roundId === 'round3' ? 4 : 0;
        
        for (let i = 0; i < count; i++) {
            const match = document.createElement('div');
            match.className = 'bracket-match';
            match.innerHTML = `
                <div class="match-player">
                    <span class="player-name">TBD</span>
                    <span class="player-score">-</span>
                </div>
                <div class="match-player">
                    <span class="player-name">TBD</span>
                    <span class="player-score">-</span>
                </div>
            `;
            container.appendChild(match);
        }
    }
}

function updateWinners(winnerLines) {
    console.log('Updating winners:', winnerLines);
    
    winnerLines.forEach(line => {
        if (!line.includes(':')) return;
        
        const parts = line.split(':');
        if (parts.length < 2) return;
        
        const place = parts[0].trim();
        const name = parts[1].trim();
        
        console.log(`Winner: place ${place} = ${name}`);
        
        const element = document.getElementById(`place${place}`);
        if (element) {
            element.textContent = name;
        }
    });
}

// ========== UTILITY FUNCTIONS ==========
function getImageSrc(localPath, fallback) {
    return localPath; // Will be handled by onerror
}

function showNotification(message, type = 'info') {
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = message;
    document.body.appendChild(notification);

    setTimeout(() => notification.remove(), 5000);
}

// ========== LANGUAGE FUNCTIONS ==========
function setLanguage(lang) {
    console.log('Setting language to:', lang);
    // Обновляем глобальную переменную
    currentLang = lang;
    localStorage.setItem('phg_lang', lang);
    
    const elements = document.querySelectorAll('[data-translate]');
    console.log('Found elements to translate:', elements.length);
    
    elements.forEach(el => {
        const key = el.getAttribute('data-translate');
        if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
            el.textContent = TRANSLATIONS[lang][key];
        } else {
            console.warn('No translation for key:', key, 'in language:', lang);
        }
    });

    // Update killer names
    document.querySelectorAll('.killer-option span').forEach(span => {
        const killerId = span.parentElement.dataset.killer;
        const killer = KILLERS.find(k => k.id === killerId);
        if (killer) {
            span.textContent = lang === 'ru' ? killer.nameRu : killer.name;
        }
    });
    
    // Обновляем текст на кнопке переключения
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.textContent = lang === 'ru' ? 'RU / EN' : 'RU / EN';
    }
    
    console.log('Language set successfully to', lang);
}

// ========== LOADER ==========
function initLoader() {
    const loader = document.getElementById('loader');
    const mainContainer = document.getElementById('mainContainer');
    const percentEl = document.getElementById('loaderPercent');
    
    let percent = 0;
    const interval = setInterval(() => {
        percent += Math.random() * 15;
        if (percent >= 100) {
            percent = 100;
            clearInterval(interval);
            
            setTimeout(() => {
                loader.classList.add('hidden');
                mainContainer.classList.add('visible');
            }, 500);
        }
        percentEl.textContent = Math.floor(percent) + '%';
    }, 100);
}

// ========== DEVTOOLS DETECTION ==========
function detectDevTools() {
    const warning = document.getElementById('devtoolsWarning');
    
    const checkDevTools = () => {
        const threshold = 160;
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;
        
        if (widthThreshold || heightThreshold) {
            warning.classList.add('active');
        } else {
            warning.classList.remove('active');
        }
    };

    setInterval(checkDevTools, 1000);
    
    // Disable right-click
    document.addEventListener('contextmenu', e => e.preventDefault());
    
    // Disable keyboard shortcuts
    document.addEventListener('keydown', e => {
        if (e.key === 'F12' || 
            (e.ctrlKey && e.shiftKey && e.key === 'I') ||
            (e.ctrlKey && e.shiftKey && e.key === 'J') ||
            (e.ctrlKey && e.key === 'U')) {
            e.preventDefault();
        }
    });
}

// ========== NAVIGATION ==========
function initNavigation() {
    const navBtns = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.content-section');
    const backBtn = document.getElementById('backBtn');
    const navSection = document.getElementById('navSection');
    const prizeSection = document.getElementById('prizeSection');

    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const sectionId = btn.dataset.section;
            
            // Hide all sections first
            sections.forEach(s => s.classList.remove('active'));
            
            // Show target section
            document.getElementById(sectionId).classList.add('active');
            
            // Hide nav and prize sections
            navSection.style.display = 'none';
            prizeSection.style.display = 'none';
            
            // Show back button
            backBtn.classList.add('visible');

            // Load data for participants if needed
            if (sectionId === 'participants') {
                loadParticipants();
            }
        });
    });

    backBtn.addEventListener('click', () => {
        sections.forEach(s => s.classList.remove('active'));
        navSection.style.display = 'flex';
        prizeSection.style.display = 'flex';
        backBtn.classList.remove('visible');
    });
}

// ========== KILLER SELECTION ==========
function initKillerSelection() {
    const grid = document.getElementById('killerGrid');
    const hiddenInput = document.getElementById('selectedKiller');

    // СОЗДАЁМ ОГРАНИЧЕННЫЙ СПИСОК КИЛЛЕРОВ
    const allowedKillers = [
        'huntress','spirit','oni',
        'executioner','artist','cenobite'
    ];

    // ФИЛЬТРУЕМ ТОЛЬКО РАЗРЕШЁННЫХ КИЛЛЕРОВ
    const filteredKillers = KILLERS.filter(killer => 
        allowedKillers.includes(killer.id)
    );

    // ИСПОЛЬЗУЕМ ОТФИЛЬТРОВАННЫЙ СПИСОК
    filteredKillers.forEach(killer => {
        const div = document.createElement('div');
        div.className = 'killer-option';
        div.dataset.killer = killer.id;
        div.innerHTML = `
            <img src="${killer.img}" 
                 onerror="this.src='https://i.postimg.cc/MpPNLknH/killer-placeholder.png'" 
                 alt="${killer.name}">
            <span>${currentLang === 'ru' ? killer.nameRu : killer.name}</span>
        `;
        
        div.addEventListener('click', () => {
            document.querySelectorAll('.killer-option').forEach(k => k.classList.remove('selected'));
            div.classList.add('selected');
            hiddenInput.value = killer.id;
        });

        grid.appendChild(div);
    });
}

// ========== REGISTRATION ==========
function checkRegistration() {
    return localStorage.getItem('phg_registered') === 'true';
}

function initRegistration() {
    const content = document.getElementById('registrationContent');
    
    if (checkRegistration()) {
        content.innerHTML = `
            <div class="already-registered">
                <i class="fas fa-check-circle" style="font-size: 4rem; margin-bottom: 20px;"></i>
                <h3 data-translate="already_registered">${TRANSLATIONS[currentLang].already_registered}</h3>
            </div>
        `;
        return;
    }

    const form = document.getElementById('registrationForm');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const selectedKiller = document.getElementById('selectedKiller').value;
        if (!selectedKiller) {
            showNotification(TRANSLATIONS[currentLang].select_killer, 'error');
            return;
        }

        const formData = {
            nickname: document.getElementById('nickname').value,
            twitch: document.getElementById('twitch').value,
            discord: document.getElementById('discord').value,
            steam: document.getElementById('steam').value,
            killer: selectedKiller,
            hours: document.getElementById('hours').value,
            additional: document.getElementById('additional').value,
            timestamp: new Date().toISOString()
        };

        try {
            await sendToTelegram(formData);
            localStorage.setItem('phg_registered', 'true');
            showNotification(TRANSLATIONS[currentLang].registration_success, 'success');
            
            setTimeout(() => {
                initRegistration(); // Refresh to show "already registered"
            }, 2000);
        } catch (error) {
            console.error('Registration error:', error);
            showNotification(TRANSLATIONS[currentLang].registration_error, 'error');
        }
    });
}

// ========== TELEGRAM INTEGRATION ==========
async function loadTelegramConfig() {
    try {
        // Используем правильный URL для Google Sheets API
        // Формат: https://docs.google.com/spreadsheets/d/{SHEET_ID}/gviz/tq?tqx=out:json
        const sheetUrl = `https://docs.google.com/spreadsheets/d/${CONFIG.SHEET_ID}/gviz/tq?tqx=out:json&sheet=config`;
        console.log('Loading config from:', sheetUrl);
        
        const response = await fetch(sheetUrl);
        if (!response.ok) {
            throw new Error(`Failed to load config: ${response.status}`);
        }
        
        const text = await response.text();
        // Убираем префикс от Google API
        const jsonText = text.substring(text.indexOf('{'), text.lastIndexOf('}') + 1);
        const data = JSON.parse(jsonText);
        
        // Парсим данные из Google Sheets
        if (data.table && data.table.rows && data.table.rows.length > 0) {
            const rows = data.table.rows;
            
            // Предполагаем, что первая строка - заголовки, вторая строка - данные
            if (rows.length > 1) {
                const row = rows[1].c; // Вторая строка (индекс 1)
                if (row && row.length >= 2) {
                    telegramConfig.botToken = row[0]?.v || '';
                    telegramConfig.chatId = row[1]?.v || '';
                    
                    console.log('Loaded Telegram config:', telegramConfig);
                }
            }
        }
        
        // Если не удалось загрузить, используем значения из TXT файла как fallback
        if (!telegramConfig.botToken || !telegramConfig.chatId) {
            await loadTelegramConfigFromTxt();
        }
        
    } catch (error) {
        console.error('Error loading Telegram config from Google Sheets:', error);
        // Fallback - загружаем из TXT файла
        await loadTelegramConfigFromTxt();
    }
}

async function loadTelegramConfigFromTxt() {
    try {
        const response = await fetch(CONFIG.TXT_FILES.config);
        if (response.ok) {
            const text = await response.text();
            const lines = text.split('\n').filter(line => line.trim() !== '');
            
            // Формат: botToken,chatId
            if (lines.length > 0) {
                const values = lines[0].split(',').map(v => v.trim());
                if (values.length >= 2) {
                    telegramConfig.botToken = values[0];
                    telegramConfig.chatId = values[1];
                    console.log('Loaded Telegram config from TXT:', telegramConfig);
                }
            }
        }
    } catch (error) {
        console.error('Error loading Telegram config from TXT:', error);
        // Ultimate fallback - пустые значения (нужно будет установить вручную)
        telegramConfig.botToken = '';
        telegramConfig.chatId = '';
    }
}

async function sendToTelegram(data) {
    // Проверяем, есть ли конфигурация
    if (!telegramConfig.botToken || !telegramConfig.chatId) {
        console.error('Telegram config not loaded');
        throw new Error('Telegram configuration not loaded. Please check config files.');
    }

    const killer = KILLERS.find(k => k.id === data.killer);
    const killerName = currentLang === 'ru' ? killer.nameRu : killer.name;

    const message = `
🎮 *НОВАЯ ЗАЯВКА НА ТУРНИР*

👤 *Никнейм:* ${data.nickname}
📺 *Twitch:* ${data.twitch}
💬 *Discord:* ${data.discord}
🎮 *Steam/Epic:* ${data.steam}
🔪 *Киллер:* ${killerName}
⏱ *Часы в игре:* ${data.hours}
📝 *Доп. информация:* ${data.additional || 'Не указано'}
📅 *Дата заявки:* ${new Date(data.timestamp).toLocaleString()}
    `;

    const url = `https://api.telegram.org/bot${telegramConfig.botToken}/sendMessage`;
    
    console.log('Sending to Telegram:', url);
    
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: telegramConfig.chatId,
            text: message,
            parse_mode: 'Markdown'
        })
    });

    if (!response.ok) {
        const errorText = await response.text();
        console.error('Telegram API error:', response.status, errorText);
        throw new Error(`Telegram API error: ${response.status}`);
    }

    return response.json();
}

// ========== BALANCE SECTION ==========
function initBalanceSection() {
    // Stage 1 Killers (example - adjust as needed)
    const stage1Killers = ['huntress', 'spirit', 'oni', 'artist', 'executioner', 'cenobite'];
    const stage2Killers = ['mastermind', 'demogorgon', 'blight'];
    const stage3Killers = ['unknown', 'cannibal', 'clown'];

    function renderKillers(containerId, killerIds) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        container.innerHTML = ''; 
        
        killerIds.forEach(id => {
            const killer = KILLERS.find(k => k.id === id);
            if (!killer) return;
            
            const item = document.createElement('div');
            item.className = 'balance-item';
            item.innerHTML = `
                <img src="${killer.img}" 
                     onerror="this.src='https://i.postimg.cc/MpPNLknH/killer-placeholder.webp'" 
                     alt="${killer.name}">
                <div class="balance-item-name">${currentLang === 'ru' ? killer.nameRu : killer.name}</div>
            `;
            container.appendChild(item);
        });
    }

    renderKillers('killersStage1', stage1Killers);
    renderKillers('killersStage2', stage2Killers);
    renderKillers('killersStage3', stage3Killers);

    // Maps for Stage 1
    const maps = [
        { name: 'Coal Tower', nameRu: 'Угольная башня', img: 'https://i.imgur.com/MBHfMUb.png' },
        { name: 'Wreckers Yard', nameRu: 'Зона свалки', img: 'https://i.imgur.com/zQXw63z.png' },
        { name: 'Suffocation Pit', nameRu: 'Удушающая яма 1', img: 'https://i.imgur.com/wesObbm.png' }
    ];

    const mapsContainer = document.getElementById('mapsStage1');
    if (mapsContainer) {
        mapsContainer.innerHTML = '';
        maps.forEach(map => {
            const item = document.createElement('div');
            item.className = 'balance-item';
            item.innerHTML = `
                <img src="${map.img}" 
                     onerror="this.src='https://i.postimg.cc/QtpBL4cV/map-placeholder.webp'" 
                     alt="${map.name}">
                <div class="balance-item-name">${currentLang === 'ru' ? map.nameRu : map.name}</div>
            `;
            mapsContainer.appendChild(item);
        });
    }

    // Perks for Stage 2
    const perks = [
        { name: 'Resilience', nameRu: 'Устойчивость', img: 'https://i.imgur.com/qpB0dm8.png' },
        { name: 'Finesse', nameRu: 'Сноровка', img: 'https://i.imgur.com/Klt9NNO.png' },
        { name: 'Lithe', nameRu: 'Гибкость', img: 'https://i.imgur.com/yALtWZg.png' },
        { name: 'Overcome', nameRu: 'Преодоление', img: 'https://i.imgur.com/4K4YgLc.png' },
        { name: 'Dramaturgy', nameRu: 'Драматургия', img: 'https://i.imgur.com/1Gn8RBB.png' },
        { name: 'Smash Hit', nameRu: 'Ударный забег', img: 'https://i.imgur.com/aE1jXYT.png' }
    ];

    const perksContainer = document.getElementById('perksStage2');
    if (perksContainer) {
        perksContainer.innerHTML = '';
        perks.forEach(perk => {
            const item = document.createElement('div');
            item.className = 'balance-item';
            item.innerHTML = `
                <img src="${perk.img}" 
                     onerror="this.src='https://i.postimg.cc/CxL4TLMR/perk-placeholder.png'" 
                     alt="${perk.name}">
                <div class="balance-item-name">${currentLang === 'ru' ? perk.nameRu : perk.name}</div>
            `;
            perksContainer.appendChild(item);
        });
    }
}

// ========== INITIALIZE BRACKET ==========
function initBracket() {
    // Сначала создаём базовую структуру
    function generateMatches(count, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        container.innerHTML = '';
        
        for (let i = 0; i < count; i++) {
            const match = document.createElement('div');
            match.className = 'bracket-match';
            match.innerHTML = `
                <div class="match-player">
                    <span class="player-name">TBD</span>
                    <span class="player-score">-</span>
                </div>
                <div class="match-player">
                    <span class="player-name">TBD</span>
                    <span class="player-score">-</span>
                </div>
            `;
            container.appendChild(match);
        }
    }

    generateMatches(16, 'round1');
    generateMatches(8, 'round2');
    generateMatches(4, 'round3');

    // Затем загружаем данные из TXT
    loadBracketData();
}

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', async () => {
    console.log('DOM loaded, initializing...');

    // Initialize loader
    initLoader();

    // Detect DevTools
    detectDevTools();

    // Set initial language
    setLanguage(currentLang);

    // Load Telegram config from Google Sheets
    await loadTelegramConfig();

    // Initialize components
    initNavigation();
    initKillerSelection();
    initRegistration();
    initBalanceSection();
    initBracket();

    // Language toggle
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', function() {
            const newLang = currentLang === 'ru' ? 'en' : 'ru';
            currentLang = newLang;
            setLanguage(newLang);
            initBalanceSection();
            
            if (document.getElementById('participants').classList.contains('active')) {
                loadParticipants();
            }
            
            if (checkRegistration()) {
                initRegistration();
            }
        });
    }
    
    // Initial load of participants if on participants page
    if (document.getElementById('participants').classList.contains('active')) {
        loadParticipants();
    }
});