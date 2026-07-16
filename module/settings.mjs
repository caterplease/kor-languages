export function add(key, data) {
    const common = {
        config: true,
        requiresReload: true,
        scope: "world",
        name: `KOR-LANG.${key}.name`,
        hint: `KOR-LANG.${key}.hint`,
    };

    game.settings.register("kor-languages", key, Object.assign(common, data));
}

export function get(key) {
    return game.settings.get("kor-languages", key);
}
