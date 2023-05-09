import OnView from "@/Components/Geral/OnView";

const people = [
  {
    name: "Ederson F Fagundes",
    role: "Co-Fundador / CEO",
    imageUrl:
      "https://media.licdn.com/dms/image/D4D03AQEuOOYQqfUVvw/profile-displayphoto-shrink_800_800/0/1665242848815?e=1689206400&v=beta&t=Tl3EoomCrlLl-I6ca7RKsKoywAOOivTddUAV8RLUEfQ",
  },
  {
    name: "Eliane Franzen",
    role: "CFO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Jonathan B Fagundes",
    role: "Desenvolvedor Full Stack",
    imageUrl:
      "https://media.licdn.com/dms/image/C4E03AQGthaYvnEj8aQ/profile-displayphoto-shrink_400_400/0/1646957876924?e=1689206400&v=beta&t=DTOcQBWtdwvrFGVmePAzGw3Fquyha9gbCDxy96Si7HA",
  },
];

export default function HomeTeam() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Conheça nosso time
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae
            elementum enim vitae ullamcorper suspendisse.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person, i) => (
            <li key={person.name}>
              <OnView delay={i * 0.1} className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src={person.imageUrl}
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {person.role}
                  </p>
                </div>
              </OnView>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
