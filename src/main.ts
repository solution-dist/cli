// src/main.ts
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import { cli } from '@je-es/cli';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ CORE ════════════════════════════════════════╗

    function main() {

        // ════ Setup ════
        cli('{{tag}}', '{{version}}').description('{{desc}}')


        // ════ Commands ════
        .command({
            name        : 'create',
            args        : [{ name: 'name', required: true }],
            options     : [
                { name: 'type',     flag: '-t', type: 'string',     required: true },
                { name: 'force',    flag: '-f', type: 'boolean',    default: false }
            ],
            action      : ({ args, options }) => { console.log(`Creating ${args.name} as ${options.type}`); }
        })


        // ════ Build ════
        .build().run();

    }

    main();

// ╚══════════════════════════════════════════════════════════════════════════════════════╝