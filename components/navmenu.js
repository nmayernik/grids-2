import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default function NavMenu() {

    return  (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>…</DropdownMenu.Trigger>
            <DropdownMenu.Content>
                <DropdownMenu.Item>…</DropdownMenu.Item>
                <DropdownMenu.Item>…</DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Root>
                <DropdownMenu.TriggerItem>Sub menu →</DropdownMenu.TriggerItem>
                <DropdownMenu.Content>
                    <DropdownMenu.Item>Sub menu item</DropdownMenu.Item>
                    <DropdownMenu.Item>Sub menu item</DropdownMenu.Item>
                    <DropdownMenu.Arrow />
                </DropdownMenu.Content>
                </DropdownMenu.Root>
                <DropdownMenu.Separator />
                <DropdownMenu.Item>…</DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    );   
}